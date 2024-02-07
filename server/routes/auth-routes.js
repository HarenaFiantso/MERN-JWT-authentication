import express from 'express';
import pool from '../config/database-config.js';
import bcrypt from 'bcrypt';
import { jwtTokens } from '../utils/jwt-helpers.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query('SELECT * FROM users WHERE user_email = ?', [email]);

    if (users.rows.length === 0) {
      return res.status(401).json({ error: 'Email is incorrect' });
    }

    const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const tokens = jwtTokens(users.rows[0]);

    res.cookie('refresh_token', tokens.refreshToken, {
      ...(process.env.COOKIE_DOMAIN && { domain: process.env.COOKIE_DOMAIN }),
      httpOnly: true,
      sameSite: 'none',
      secure: true,
    });
    res.json(tokens);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

export default router;

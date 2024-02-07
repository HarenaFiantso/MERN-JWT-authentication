import express from 'express';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {}
});

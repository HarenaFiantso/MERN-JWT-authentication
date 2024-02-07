import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/auth-routes.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { credentials: true, origin: process.env.URL || '*' };

app.use(cors(corsOptions));

app.use('/hello', (res, req) => {
  req.send('Hello World');
});
app.use('/', express.static(join(__dirname, 'public')));
app.use('/api/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

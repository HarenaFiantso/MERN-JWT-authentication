import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/hello', (res, req) => {
  req.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

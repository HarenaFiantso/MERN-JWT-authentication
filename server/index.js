const express = require('express');
const app = express();
const db = require('./db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

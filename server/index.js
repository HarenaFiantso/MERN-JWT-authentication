const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');

const app = express();
const PORT = 3000;
dotenv.config();

mongoose.set('strictQuery', true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB');
  } catch (error) {
    console.log(error);
  }
};

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});

// writing this places all environemnt variables in one single line
require('dotenv').config;
// this should always be first.
// all pages should load with the environment variables ready to be manipulated


const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});

console.log(process.env.SECRET_PASSWORD)
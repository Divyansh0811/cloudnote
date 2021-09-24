const connectToDB = require('./db')
const express = require('express');

connectToDB();
const app = express();
app.get('/', (req, res) => {
  res.send("Hello")
})
app.listen("5000", () =>{
  console.log("hey, your backend is running on port 5000")
})
const connectToDB = require('./db')
const express = require('express');

connectToDB();
const app = express();

//All Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//listening to our express app
app.listen("5000", () =>{
  console.log("hey, your backend is running on port 5000")
})
const connectToDB = require('./db')
const express = require('express');
const cors = require('cors')
connectToDB();
const app = express();
app.use(cors())
app.use(express.json())
//All Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

//listening to our express app
app.listen("5000", () =>{
  console.log("hey, your backend is running on port 5000")
})
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const fetchUser = require('../middleware/fetchUser')

dotenv.config();

const JWT_SECRET = process.env.SECRET_CODE;


//CREATING USER: POST METHOD
router.post(
 "/createuser",
 [
  body("name", "Enter a valid name(atleast 3 characters)").isLength({ min: 3 }),
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password length should be atleast 5 characters").isLength({
   min: 5,
  }),
 ],
 async (req, res) => {
   let success = true
  //if validation errors:
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    success = false
   return res.status(400).json({success, errors: errors.array() });
  }
  try {
   //if email already in use (email was supposed to be unique)
   let user = await User.findOne({ email: req.body.email });
   if (user) {
     success = false
    return res.status(400).json({success, error: "Email already in use" });
   }
   var salt = await bcrypt.genSaltSync(10);
   const hashedPassword = await bcrypt.hash(req.body.password, salt)

   //else create a new user
   user = await User.create({
    name: req.body.name,
    password: hashedPassword,
    email: req.body.email,
   });

   const data = {
     user:{
       id: user.id
     }
   }

   const authToken = jwt.sign(data, JWT_SECRET)
   res.json({ success, authToken}); // sending user as response
  } catch (error) {
   console.error(error);
   res.status(500).send("Something went wrong");
  }
 }
);

//Authenticating a user(Login) : /api/auth/login
router.post('/login',[
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password cannot be empty").exists(),
], async (req, res) =>{
  //if validation errors:
  let success = true;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    success = false;
   return res.status(400).json({ success,errors: errors.array() });
  }

  const{email, password} = req.body;
  try {
    let user = await User.findOne({email})
    if(!user){
      success = false;
      return res.status(400).json({success,error: "Wrong credentials!"})
    }

    const comparedPassword = await bcrypt.compare(password, user.password)
    if(!comparedPassword){
      success = false;
      return res.status(400).json({success, error: "Wrong credentials!"})
    }
    const data = {
      user:{
        id: user.id
      }
    }
 
    const authToken = jwt.sign(data, JWT_SECRET)
    res.json({success, authToken});
  } catch (error) {
    console.error(error)
    res.status(500).json({error: "Something went wrong!"})
  }
})

//Authenticating a user using auth token: /api/auth/getuser
router.post('/getuser', fetchUser, async (req, res) =>{
  //using a middleware so that we do not have to write the same code again & again where we need authentication
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong!')
  }
})

module.exports = router;
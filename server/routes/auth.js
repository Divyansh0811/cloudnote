const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'IAmAGoodBoyIYKYK'


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
  //if validation errors:
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
   return res.status(400).json({ errors: errors.array() });
  }
  try {
   //if email already in use (email was supposed to be unique)
   let user = await User.findOne({ email: req.body.email });
   if (user) {
    return res.status(400).json({ error: "Email already in use" });
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
   res.json({authToken}); // sending user as response
  } catch (error) {
   console.error(error);
   res.status(500).send("Something went wrong");
  }
 }
);

module.exports = router;

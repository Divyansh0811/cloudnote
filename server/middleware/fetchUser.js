var jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET = process.env.SECRET_CODE;

const fetchUser = (req, res, next) => {
 const token = req.header("auth-token");
 if (!token) {
  return res
   .status(401)
   .send({ error: "Please authenticate using a valid token" });
 }
 try {
  const data = jwt.verify(token, JWT_SECRET);
  req.user = data.user;
  next();
 } catch (error) {
  res.status(401).send({ error: "Please authenticate using a valid token" });
 }
};
module.exports = fetchUser;
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectToDB = () => {
 mongoose
  .connect(process.env.MONGO_URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
  })
  .then(console.log("connected to our DB"))
  .catch((error) => console.error(error));
};
module.exports = connectToDB;

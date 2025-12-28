// implement the port here and export to other file from here.
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
};

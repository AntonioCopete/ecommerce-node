const dotenv = require("dotenv");

dotenv.config();

const { DB_URL, PORT, CLIENT_URL } = process.env;

const CONFIG = {
  APP: {
    PORT: PORT || 4000,
  },
  DB: {
    URL: DB_URL,
  },
  CLIENT: {
    URL: CLIENT_URL,
  },
  SECRET: "ecommerce-api",
};

module.exports = CONFIG;

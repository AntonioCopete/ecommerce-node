const dotenv = require("dotenv");

dotenv.config();

const { DB_URL, PORT, CLIENT_URL, STORE_API } = process.env;

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
  STORE_API: {
    URL: STORE_API,
  },
  SECRET: "ecommerce-api",
};

module.exports = CONFIG;

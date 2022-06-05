const mongoose = require("mongoose");
const CONFIG = require("../config/config");

function connection() {
  return mongoose.connect(CONFIG.DB.URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
  });
}

module.exports = connection;

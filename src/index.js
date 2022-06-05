const express = require("express");
const CONFIG = require("./config/config");
const connect = require("./db/connection");
const root = require("./server");

const app = express();

connect().then(async () => {
  console.log("DB CONNECTED");
});

app.use("/api", root);

app.listen(CONFIG.APP.PORT, () => {
  console.log(`Server running at port ${CONFIG.APP.PORT}`);
});

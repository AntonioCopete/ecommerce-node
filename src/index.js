const express = require("express");
const CONFIG = require("./config/config");
const connect = require("./db/connection");
const categoryFeed = require("./db/feed/categoryFeed");
const productFeed = require("./db/feed/productFeed");
const root = require("./server");

const app = express();

connect().then(async () => {
  console.log("DB CONNECTED");
  categoryFeed();
  productFeed();
});

app.use("/api", root);

app.listen(CONFIG.APP.PORT, () => {
  console.log(`Server running at port ${CONFIG.APP.PORT}`);
});

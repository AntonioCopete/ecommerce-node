const express = require("express");
const { json } = require("body-parser");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const cors = require("cors");

const CONFIG = require("./config/config");
const { ProductRouter, UserRouter } = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(
  json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    limit: "10mb",
    extended: true,
  })
);

app.use(
  cors({
    origin: CONFIG.CLIENT.URL,
  })
);

app.use("/auth", UserRouter);
app.use("/products", ProductRouter);

module.exports = app;

const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  thumbnail: {
    type: String,
  },
});

const ProductModel = new model("product", ProductSchema);
module.exports = ProductModel;

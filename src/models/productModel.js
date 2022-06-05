const { Schema, model, default: mongoose } = require("mongoose");

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    price: { type: Number, required: true },

    description: {
      type: String,
      trim: true,
      required: true,
    },
    categoryId: { type: String, ref: "category" },
    image: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const ProductModel = new model("product", ProductSchema);
module.exports = ProductModel;

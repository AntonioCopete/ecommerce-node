const { Schema, model } = require("mongoose");

const CategorySchema = new Schema(
  {
    _id: { type: Number, unique: true, trim: true, required: true },
    name: { type: String, unique: true, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

const CategoryModel = new model("category", CategorySchema);
module.exports = CategoryModel;

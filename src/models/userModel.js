const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: { type: String, unique: true, trim: true, required: true },
    username: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
  },
  { timestamps: true, versionKey: false }
);

UserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.statics.comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const UserModel = new model("user", UserSchema);
module.exports = UserModel;

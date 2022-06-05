const { User } = require("../models");
const jwt = require("jsonwebtoken");
const CONFIG = require("../config/config");

async function signUp(req, res) {
  const { email, username, password } = req.body;

  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      return res.status(200).send({
        error: "User already exists",
      });
    }

    await User.create({
      email: email,
      username: username,
      password: await User.encryptPassword(password),
    });

    return res.status(200).send({
      success: "User signed up successfully",
    });
  } catch (error) {
    next(error);
  }
}

async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email: email }, { _id: 1, password: 1, username: 1 });

    if (!foundUser) {
      return res.status(200).send({
        error: "User not found",
      });
    }
    console.log("DEN");

    const validatedUser = await User.comparePassword(password, foundUser.password);

    if (!validatedUser) {
      return res.status(200).send({
        error: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      CONFIG.SECRET,
      { expiresIn: 86400 }
    );

    return res.status(200).send({
      success: `Logged as ${foundUser.username}`,
      user: {
        token: token,
        username: foundUser.username,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { signUp, signIn };

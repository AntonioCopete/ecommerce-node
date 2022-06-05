const { User } = require("../models");
const jwt = require("jsonwebtoken");
const CONFIG = require("../config/config");

async function signUp(req, res) {
  const { email, username, password } = req.body;

  try {
    await User.create({
      email: email,
      username: username,
      password: await User.encryptPassword(password),
    });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      error: "Error processing your signup request",
    });
  }

  return res.status(200).send({
    success: "REGISTRADO",
  });
}

async function signIn(req, res) {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email: email }, { _id: 1, password: 1, username: 1 });
  console.log(userFound);

  const validatedUser = await User.comparePassword(password, userFound.password);
  console.log(validatedUser);

  const token = jwt.sign(
    {
      id: userFound._id,
    },
    CONFIG.SECRET,
    { expiresIn: 86400 }
  );

  return res.status(200).send({
    success: `Logged as ${userFound.username}`,
    token: token,
  });
}

module.exports = { signUp, signIn };

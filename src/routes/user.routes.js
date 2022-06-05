const UserRouter = require("express").Router();

const { authController } = require("../controllers");

UserRouter.post("/signup", authController.signUp);
UserRouter.post("/signin", authController.signIn);

module.exports = UserRouter;

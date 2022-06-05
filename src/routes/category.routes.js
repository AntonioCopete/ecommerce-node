const { categoryController } = require("../controllers");

const CategoryRouter = require("express").Router();

CategoryRouter.get("/", categoryController.getAll);

module.exports = CategoryRouter;

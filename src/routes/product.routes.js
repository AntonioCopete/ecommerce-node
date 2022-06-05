const ProductRouter = require("express").Router();
const { productController } = require("../controllers");

ProductRouter.get("/", productController.getProducts);
ProductRouter.post("/", productController.createProduct);
ProductRouter.post("/:id", productController.updateProduct);
ProductRouter.post("/:id", productController.deleteProduct);

module.exports = ProductRouter;

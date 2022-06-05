const { Product } = require("../models/index");

async function getProducts(req, res) {
  res.status(200).send({
    data: "CONSULTED",
  });
}

function createProduct(req, res) {
  const { name, description } = req.body;

  try {
    Product.create({
      name: name,
      description: description,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }

  res.status(200).send({
    msg: "CREATED",
  });
}

async function updateProduct(req, res) {
  res.status(200).send({
    data: "UPDATED",
  });
}

async function deleteProduct(req, res) {
  res.status(200).send({
    data: "DELETED",
  });
}

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };

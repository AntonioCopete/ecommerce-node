const { Category } = require("../../models");

async function categoryFeed() {
  const foundCategories = await Category.find();
  if (foundCategories.length === 0) {
    await Category.create(data);
  }
}

const data = [
  { _id: 1, name: "Electronics" },
  { _id: 2, name: "Jewelery" },
  { _id: 3, name: "Men's clothing" },
  { _id: 4, name: "Women's clothing" },
];

module.exports = categoryFeed;

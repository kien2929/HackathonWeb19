const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

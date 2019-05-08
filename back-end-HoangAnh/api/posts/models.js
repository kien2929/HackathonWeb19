const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  data: {
    manufacturer: String,
    name: String,
    _3G: {
      type: String,
      default: "Co"
    },
    _4G: {
      type: String,
      default: "Co"
    },
    size: Number,
    weight: Number,
    display: Number,
    resolution: String,
    sim: Number,
    ram: {
      type: String,
      default: '2GB'
    },
    romColorPrice: [[]],
    os: String,
    description: String,
    promotion: String,
    status: String
  },
  path: {
    result: String,
    data: [String],
    numberOfImages: Number,
    message: String
  },
  view: {
    type: Number,
    default: 0
  },
  buy: {
    type: Number,
    default: 0
  }
});
const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

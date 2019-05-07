const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  view: {
    type:Number,
    default:0
  },
  buy:{
    type:Number,
    default:0
  },
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;

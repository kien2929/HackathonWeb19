const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String, 
});
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;

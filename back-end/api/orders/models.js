const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  description: String,
  checkbox: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;
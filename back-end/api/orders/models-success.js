const mongoose = require("mongoose");

const OrderSuccessSchema = new mongoose.Schema({
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
const OrderSuccessModel = mongoose.model("Ordersuccess", OrderSuccessSchema);

module.exports = OrderSuccessModel;
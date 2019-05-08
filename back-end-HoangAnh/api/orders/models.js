const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  address:String,
  production:[],
  total:Number
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // }
  // name : 'Nguyen Hoang Anh',
  //         phone : '0972742128',
  //         address : 'Thanh Xuan, Ha Noi',
  //         production : [{name : 'iphone X', quantity : 3, price : 60000000},{name : 'iphone Y', quantity : 3, price : 60000000}],
  //         total : 6000
});
const OrderModel = mongoose.model("Order", OrderSchema);

module.exports = OrderModel;

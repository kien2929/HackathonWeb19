const express = require("express");
const OrderModel = require("./models");
const OrderSuccessModel = require("./models-success");

const orderRouter = express();

orderRouter.get("/", async (req, res) => {
  try {
    const allOrders = await OrderModel.find().exec();
    res.status(200).json({
      result: "ok",
      data: allOrders,
      message: "ok"
    })
  } catch (error) {
    res.status(error.status || 500).end(error.message || 'Internal server error');
  }
})

orderRouter.post("/", async (req, res) => {
  try {
    const orderInfo = req.body;
    const newOrder = await OrderModel.create(orderInfo);

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).end(error.message);
  }
}); 

orderRouter.post("/success", async (req, res) => {
  try {
    const orderInfo = req.body;
    const newOrder = await OrderSuccessModel.create(orderInfo);

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).end(error.message);
  }
}); 

module.exports = orderRouter;

const express = require("express");
const path = require("path");
const multer = require("multer");
const formidable = require("formidable");
const ProductModel = require("./models");

const productRouter = express();

productRouter.post("/", async (req, res) => {
  try {
    if (0) {
      res.status(403).json({
        message: "Unauthenticated"
      });
    } else {
      const productInfo = req.body;
      console.log(productInfo);
      const newProduct = await ProductModel.create(productInfo);
      res.status(201).json(newProduct);
    }
  } catch (error) {
    res.status(500).end(error.message); 
  }
});

productRouter.get("/get-product-by-id", async (req, res) => {
  try {
    const productId = req.query.productId; 
    const productInfo = await ProductModel.findByIdAndUpdate(productId, {$inc: {["view"]: 1}}).exec();

    res.status(200).json(productInfo);
  } catch (error) {
    res.status(500).end(error.message);
  }
});

productRouter.get("/products", async (req, res) => {
  try {
    const allProducts = await ProductModel.find().exec();
    res.status(200).json({
      result: "ok",
      data: allProducts,
      message: "ok"
    })
  } catch (error) {
    res.status(error.status || 500).end(error.message || 'Internal server error');
  }
})
productRouter.get("/products-view", async (req, res) => {
  try {
    const allProducts = await ProductModel.find().exec();
    for (i = 0; i < allProducts.length; i++) {
      for (j = i + 1; j < allProducts.length; j++) {
        if (allProducts[i].view < allProducts[j].view) {
          let temp = allProducts[i];
          allProducts[i] = allProducts[j];
          allProducts[j] = temp;
        }
      }
    }
    res.status(200).json({
      result: "ok",
      data: allProducts,
      message: "ok"
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .end(error.message || "Internal server error");
  }
});
productRouter.get("/products-buy", async (req, res) => {
  try {
    const allProducts = await ProductModel.find().exec();
    for (i = 0; i < allProducts.length; i++) {
      for (j = i + 1; j < allProducts.length; j++) {
        if (allProducts[i].buy < allProducts[j].buy) {
          let temp = allProducts[i];
          allProducts[i] = allProducts[j];
          allProducts[j] = temp;
        }
      }
    }
    res.status(200).json({
      result: "ok",
      data: allProducts,
      message: "ok"
    });
  } catch (error) {
    res
      .status(error.status || 500)
      .end(error.message || "Internal server error");
  }
});
// productRouter.get("/", async (req, res) => {
//   try {
//     const { pageNumber, pageSize } = req.query;
//     const data = await PostModel.find()
//       .skip(pageSize * (pageNumber - 1))
//       .limit(Number(pageSize))
//       .exec();

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).end(error.message);
//   }
// });

module.exports = productRouter;

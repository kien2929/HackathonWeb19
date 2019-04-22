const express = require("express");
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
      const newProduct = await ProductModel.create(productInfo);

      res.status(201).json(newProduct);
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

// productRouter.get("/:postId", async (req, res) => {
//   try {
//     const { postId } = req.params;
//     const postInfo = await PostModel.findById(postId)
//       // .populate('author', 'email firstName createdAt')
//       .populate({
//         path: "author",
//         select: "email firstName lastName createdAt"
//       })
//       .exec();

//     res.status(200).json(postInfo);
//   } catch (error) {
//     res.status(500).end(error.message);
//   }
// });

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

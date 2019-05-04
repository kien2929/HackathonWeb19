const express = require("express");

const authRouter = express();

// admin login
authRouter.post("/login", async (req, res) => {
  try {
    const loginInfo = req.body; 
    if (loginInfo.username === "admin") {
      if (loginInfo.password === "admin1") {
        // req.session.admin = {
        //     _id: user._id,
        //   };
          // req.session.save();
        res.status(200).json({
          message: "Login success",
          success: true
        });
      } else {
        res.status(200).json({
          message: "Password isnt correct",
          success: false
        });
      }
    } else {
      res.status(404).json({
        message: "Username not found",
        success: false
      });
    }
  } catch (error) {
    res.status(500).end(error.message);
  }
});

// logout
// authRouter.get("/logout", async (req, res) => {
//   try {
//     req.session.destroy();
//     res.status(200).json({
//       message: "Logout success",
//       success: true
//     });
//   } catch (error) {
//     res.status(500).end(error.message);
//   }
// });

module.exports = authRouter;
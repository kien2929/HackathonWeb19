const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require('./api/posts/routes');
const authRouter = require("./api/auth/routes");
const expressSession = require("express-session");

mongoose.connect("mongodb://localhost:27017/hackathon", error => {
  if (error) {
    throw error;
  }

  const server = express();
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }));

  // routes
  server.use("/api/posts", productRouter);
  server.use("/api/auth", authRouter); 

  server.listen(3001, error => {
    if (error) {
      throw error;
    }
    console.log("Server listen on port 3001...");
  });
});

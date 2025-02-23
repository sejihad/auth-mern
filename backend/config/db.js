const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log("connection faild", err);
  });

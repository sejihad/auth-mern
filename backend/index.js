const express = require("express");
const app = express();
const AuthRouter = require("./routes/AuthRouter");
const ProductRouter = require("./routes/ProductRouter");
const cors = require("cors");
require("dotenv").config();
require("./config/db");
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.get("/", (req, res) => {
  res.send("wellcome to the server");
});
app.listen(3000, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

const { login, signup } = require("../controllers/AuthController");
const {
  loginValidation,
  signupValidation,
} = require("../middlewares/AuthMiddleware");

const router = require("express").Router();

router.post("/login", loginValidation, login);

router.post("/signup", signupValidation, signup);

module.exports = router;

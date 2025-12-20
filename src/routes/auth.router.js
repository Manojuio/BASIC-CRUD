const express = require("express");
const router = express.Router();

const validator = require("../middleware/validator.middleware");
const authController = require("../controllers/auth.controller");


router.post("/signup",validator,authController.signupUser);
router.post("/login",authController.loginUser);
router.post("/logout",authController.logoutUser);
module.exports = router;
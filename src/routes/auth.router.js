const express = require("express");
const router = express.Router();


const authController = require("../controllers/auth.controller");
const protect = require("../middleware/auth.middleware");

router.post("/signup",authController.signupUser);
router.post("/login",authController.loginUser);
router.post("/logout",protect ,authController.logOutUser);
module.exports = router;
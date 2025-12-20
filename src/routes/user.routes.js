const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const validator = require("../middleware/validator.middleware");
const authController = require("../controllers/auth.controller");
const { route } = require("../../app");
const authmiddleware = require("../middleware/auth.middleware");


router.post("/users",validator,authmiddleware,userController.createUser);
router.get("/users",authmiddleware, userController.getAllUsers);
router.get("/users/:id",authmiddleware, userController.getuserbyid);
router.delete("/users/:id",authmiddleware,userController.usrdeletebyid);
router.put("/users/:id",authmiddleware,userController.updateuserbyid);


module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const validator = require("../middleware/validator.middleware");
const { route } = require("../../app");

router.post("/users",validator,userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getuserbyid);
router.delete("/users/:id",userController.usrdeletebyid);
router.put("/users/:id",userController.updateuserbyid);

module.exports = router;
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const authController = require("../controllers/auth.controller");
const { route } = require("../../app");
const protect = require("../middleware/auth.middleware");


router.post("/users", protect ,userController.createUser);
router.get("/users", protect ,userController.getAllUsers);
router.get("/users/:id",protect ,userController.getuserbyid);
router.delete("/users/:id",protect ,userController.usrdeletebyid);
router.put("/users/:id",protect ,userController.updateuserbyid);


module.exports = router;
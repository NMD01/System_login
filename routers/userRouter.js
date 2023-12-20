const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.get("/users", userController.getAll);
router.post("/user", userController.createUser);

module.exports = router;

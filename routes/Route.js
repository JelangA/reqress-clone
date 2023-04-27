const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// User Route
router.get("/users", UserController.getAll);
router.get("/users/:", UserController.getById);

module.exports = router;

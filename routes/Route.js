const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const ResourceConteoller = require('../controllers/resourceController');

// User Route
router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getById);

// Resource Route
router.get("/unknown", ResourceConteoller.getAll);
router.get("/unknown/:id", ResourceConteoller.getById);

module.exports = router;

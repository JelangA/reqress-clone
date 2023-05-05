const express = require("express");
const router = express.Router();
const ListUserController = require("../controllers/listuserController");
const ResourceConteoller = require('../controllers/resourceController');
const UserController = require('../controllers/userController');
const authController = require('../controllers/authController');

//auth 
router.post("/login");
router.post("/login", authController.login);

// List User Route
router.get("/users", ListUserController.getAll);
router.get("/users/:id", ListUserController.getById);

// Resource Route
router.get("/unknown", ResourceConteoller.getAll);
router.get("/unknown/:id", ResourceConteoller.getById);

// User Controller
router.post("/users/add", UserController.create);
router.put("/users/:id", UserController.update);
router.patch("/users/:id", UserController.patch);
router.delete("/users/:id", UserController.delete);

module.exports = router;
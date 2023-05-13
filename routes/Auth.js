const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

//security
router.get("/", (req, res) => {
  res.redirect("https://www.example.com/new");
});

router.post("/login", authController.login);
router.get("/protected", authMiddleware.verifyToken, authController.protected);

module.exports = router;

const jwt = require("jsonwebtoken");
const respon = require("../utils/helpers");

controller = {};

controller.login = (req, res) => {
  // Contoh username dan password sementara
  const username = "user";
  const password = "password";

  // Periksa apakah username dan password yang diberikan sesuai
  if (req.body.username === username && req.body.password === password) {
    // Jika sesuai, buat token JWT dan kirim ke client
    const token = jwt.sign({ username }, "secret-key");
    res.json({ token });
  } else {
    // Jika tidak sesuai, kirim respons error
    respon.responseErr(res, 401, "Invalid username or password", "");
  }
};

controller.protected = (req, res) => {
  // Jika token valid, kirim respons berhasil
  res.json({ message: "Protected endpoint accessed" });
};

module.exports = controller;

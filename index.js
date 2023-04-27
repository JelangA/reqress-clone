require("dotenv").config();

const express = require("express");
const bodyparser = require("body-parser");
const userRoute = require("./routes/Route");

// const user = require("./models/users");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

// Gunakan route users
app.use(userRoute);

app.listen(port, () => {
    console.log(`server berjalan di http://localhost:${port}`);
});

// const User = require("./models/users");

// // cek apakah model bisa diimpor dan dipanggil dengan benar
// console.log(User);

// // buat instance model baru
// const newUser = User.build({
//     email: "john.doe@example.com",
//     first_name: "John",
//     last_name: "Doe",
//     avatar: "https://www.example.com/avatar.jpg",
// });

// // simpan instance model baru ke dalam database
// newUser
//     .save()
//     .then((result) => console.log(result))
//     .catch((err) => console.error(err));

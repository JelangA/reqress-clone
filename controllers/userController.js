const User = require("../models/user");
const respon = require("../utils/helpers");

controller = {};

controller.create = async (req, res) => {
  try {
    //!req.body.name?.trim() || !req.body.job?.trim()
    if (req.body.name.trim() === "" || req.body.job.trim() === ""){
      return respon.responseErr(res, 400, "missing reqprd");
    }
    const createUser = await User.create(req.body, {
      // attributes: { exclude: ["updatedAt"] },
    });
    return respon.responseInput(res, 200, createUser);
  } catch (error) {
    // console.log(error);
    return respon.responseErr(res, 500, "error input data User", error.message)
  }
}

controller.update = async (req, res) => {
  let message = "Success";
  try {
    let updateUser = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updateUser[0] == 0) {
      message = "Update User Data Failed";
      return respon.responseErr(res, 400, message, "");
    }
    let userBaru = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    return respon.responseInput(res, 200, userBaru);
  } catch (err) {
    console.log(err);
    return respon.responseErr(res, 500, "Error", err.message);
  }
};


controller.patch = async (req, res) => {
  // let message = "Success";
  // try {
  //   let updateUser = await User.patch(req.body, {
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   if (updateUser[0] == 0) {
  //     message = "Gagal edit data User";
  //     return respon.responseErr(res, 400, message, "");
  //   }
  //   const userBaru = await User.findOne({
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   return respon.responseInput(res, 200, userBaru);
  // } catch (err) {
  //   console.log(err);
  //   return respon.responseErr(res, 500, "Error", err.message);
  // }
};

controller.delete = async (req, res) => {
  let message = "Succes";
  try {
    let getOne = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (getOne == null) {
      message = "User Id Not Found";
      return respon.responseErr(res, 400, message, "")
    }
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return respon.responseInput(res, 200, message)
    
  } catch (error) {
    return respon.responseErr(res, 500, "error when dleted data",error.message);
  }
}
module.exports = controller;

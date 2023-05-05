const AuthModel = require('../models/auth');

controller = {};
controller.create = async (req, res) => {
    try {
      //!req.body.name?.trim() || !req.body.job?.trim()
      if (req.body.email.trim() === "" || req.body.password.trim() === ""){
        return respon.responseErr(res, 400, "missing reqprd");
      }
      const Input = await AuthModel.create(req.body);
      return respon.responseInput(res, 200, Input);
    } catch (error) {
      // console.log(error);
      return respon.responseErr(res, 500, "error input data User", error.message)
    }
  }

controller.login = async (req, res) => {
    try {
        if (req.body.email.trim() === "" || req.body.password.trim() === ""){
          return respon.responseErr(res, 400, "missing reqprd");
        }
        const Input = await AuthModel.find({
            where: {
                Username: req.body.username,
                Password: req.body.password
            }
        });
        return respon.responseInput(res, 200, Input);
      } catch (error) {
        return respon.responseErr(res, 500, "error input data User", error.message)
      }
}

module.exports = controller;
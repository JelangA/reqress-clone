const ListUser = require("../models/list_users");
const respon = require('../utils/helpers');

controller = {};

controller.getAll = async (req, res) => {
    try {
      const delay = parseInt(req.query.delay) || 0;
      await new Promise((resolve) => setTimeout(resolve, delay));

      const ListUsers = await ListUser.findAll();
      const page = parseInt(req.query.page) || 2;
      const perPage = parseInt(req.query.per_page) || 6;

      // Hitung total data dan halaman
      const totalData = ListUsers.length;
      const totalPages = Math.ceil(totalData / perPage);

      // Ambil data untuk halaman yang diminta
      const startIndex = (page - 1) * perPage;
      const endIndex = startIndex + perPage;
      const data = ListUsers.slice(startIndex, endIndex);

      // Hasil Response
      return respon.response( res, 200, page, perPage, totalData, totalPages, data);
    } catch (error) {
      return respon.responseErr(
        res,
        500,
        "get error when all data",
        error.message
      );
    }
};

controller.getById = async (req, res) => {
    let id = req.params.id;
    try {
        const data = await ListUser.findOne({
            where: {
                id: id,
            },
        });
        console.log(data);
        if (data == null) {
            return res.status(404).json({});
        }
        return respon.resposeOne(res, 200, data);
        
    } catch (error) {
        return respon.responseErr(res, 500, "get error when get id", error.message);
    }
}

module.exports = controller;

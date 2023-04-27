const User = require("../models/users");
const helper = require('../utils/helpers');

controller = {};

controller.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        const page = parseInt(req.query.page) || 2;
        const perPage = parseInt(req.query.per_page) || 6;

        // Hitung total data dan halaman
        const totalData = users.length;
        const totalPages = Math.ceil(totalData / perPage);

        // Ambil data untuk halaman yang diminta
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const data = users.slice(startIndex, endIndex);

        // Hasil Response
        return helper.response(res,200, page, perPage, totalData, totalPages, data) 

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

controller.getById = async (req, res) => {
    let id = req.params.id;
    try {
        const getOne = await User.findOne({
            where: {
                id: id,
            }
        });

        return helper.response(res, 200, )
    } catch (error) {
        req.status(500).json({message: error.message});
    }
}

module.exports = controller;

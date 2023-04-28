const Resource = require("../models/resources");
const helper = require('../utils/helpers');

controller = {};

controller.getAll = async (req, res) => {
    try {
        const resources = await Resource.findAll();
        const page = parseInt(req.query.page) || 1;
        const perPage = parseInt(req.query.per_page) || 6;

        // Hitung total data dan halaman
        const totalData = resources.length;
        const totalPages = Math.ceil(totalData / perPage);

        // Ambil data untuk halaman yang diminta
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const data = resources.slice(startIndex, endIndex);

        // Hasil Response
        return helper.response(res,200, page, perPage, totalData, totalPages, data) 

    } catch (error) {
        return helper.responseErr(
            res,
            500,
            "get error when all data",
            error.message
        );
    }
};

controller.getById = async (req, res) => {
    let id = parseInt(req.params.id);
    try {
        const data = await Resource.findOne({
            where: {
                id: id,
            },
        });
        console.log(data);
        if (data == null) {
            return res.status(404).json({});
        }
        return helper.resposeOne(res, 200, data);
        
    } catch (error) {
        return helper.responseErr(res, 500, "get error when get id", error.message);
    }
}

module.exports = controller;

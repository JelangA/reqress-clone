'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  await queryInterface.bulkInsert(
    "resources",[
      {
        name: "cerulean",
        year: 2000,
        color: "#98B2D1",
        pantone_value: "15-4020",
      },
      {
        name: "fuchsia rose",
        year: 2001,
        color: "#C74375",
        pantone_value: "17-2031",
      },
      {
        name: "true red",
        year: 2002,
        color: "#BF1932",
        pantone_value: "19-1664",
      },
      {
        name: "aqua sky",
        year: 2003,
        color: "#7BC4C4",
        pantone_value: "14-4811",
      },
      {
        name: "tigerlily",
        year: 2004,
        color: "#E2583E",
        pantone_value: "17-1456",
      },
      {
        name: "blue turquoise",
        year: 2005,
        color: "#53B0AE",
        pantone_value: "15-5217",
      },
      {
        name: "sand dollar",
        year: 2006,
        color: "#DECDBE",
        pantone_value: "13-1106",
      },
      {
        name: "chili pepper",
        year: 2007,
        color: "#9B1B30",
        pantone_value: "19-1557",
      },
      {
        name: "blue iris",
        year: 2008,
        color: "#5A5B9F",
        pantone_value: "18-3943",
      },
      {
        name: "mimosa",
        year: 2009,
        color: "#F0C05A",
        pantone_value: "14-0848",
      },
      {
        name: "turquoise",
        year: 2010,
        color: "#45B5AA",
        pantone_value: "15-5519",
      },
      {
        name: "honeysuckle",
        year: 2011,
        color: "#D94F70",
        pantone_value: "18-2120",
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("resources", null, {});
  }
};

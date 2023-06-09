const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const resources = sequelize.define(
  "resources",
  {
    id: {
      field: "id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      field: "name",
      allowNull: false,
      type: DataTypes.STRING,
    },
    year: {
      field: "year",
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    color: {
      field: "color",
      allowNull: false,
      type: DataTypes.STRING,
    },
    pantone_value: {
      field: "pantone_value",
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "resources",
    timestamps: false,
  }
);

module.exports = resources;

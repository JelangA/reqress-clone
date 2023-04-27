const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const resources = sequelize.define(
  "resources",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    pantone_value: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "resources",
    timestamps: false,
  }
);

module.exports = resources;

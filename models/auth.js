const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Auth = sequelize.define(
  "Auth",
  {
    id: {
      field: "id",
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      field: "email",
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      field: "password",
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "auth",
  }
);

module.exports = Auth;

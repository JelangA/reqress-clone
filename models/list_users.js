const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const ListUser = sequelize.define(
  "ListUser",
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
    first_name: {
      field: "first_name",
      allowNull: false,
      type: DataTypes.STRING,
    },
    last_name: {
      field: "last_name",
      allowNull: false,
      type: DataTypes.STRING,
    },
    avatar: {
      field: "avatar",
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "list_users",
    timestamps: false,
  }
);

module.exports = ListUser;

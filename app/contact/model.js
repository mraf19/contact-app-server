const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "contacts" }
);

module.exports = contact;

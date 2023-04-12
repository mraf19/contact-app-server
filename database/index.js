const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("contact", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

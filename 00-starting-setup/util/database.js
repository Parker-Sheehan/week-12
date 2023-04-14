const Sequelize = require("sequelize");

const sequlize = new Sequelize("node-complete", "root", "H0nybager", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequlize
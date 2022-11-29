const config = require("../configs/config");
const mysql = require("mysql");

let pool = mysql.createPool(config.db);

module.exports = pool;

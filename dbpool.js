var mysql = require('mysql');
var connectInfo = require("./dbconfig.json");
var pool = mysql.createPool(connectInfo.db);
module.exports = pool;

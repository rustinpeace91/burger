//CONNECTION
//connects to the database and exports the connection. Still working on implimenting the dotenv method, but for now it's not working. Since the testing db password is an empty string. it's not too much of an issue right now

require("dotenv").config({EMPTY: ""});
var mysql = require("mysql");
var keys = require("./keys.js")
//var connection = mysql.createConnection(keys);
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
  connection = mysql.createConnection({
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '',
      database: 'burgers_db'
  });
};

module.exports = connection;
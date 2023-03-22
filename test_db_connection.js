var mysql = require('mysql2');
require('dotenv').config()

//.env file Constants
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT


//I create the connection using the test credentials
//here createPool creates a connection pool that allows
//to reuse the connection for many DB request

var conn = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT //name of the DB
});

conn.getConnection(function(err){
    if(err) throw err;
    console.log("Connected to Database");
});

module.exports= conn;
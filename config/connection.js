"use strict";
const log = console.log

// require mysql
const mysql = require("mysql");
// creat mysql connection
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // require dotenv
    const dotenv = require("dotenv").config({
        path: "git/.env"
    })
    if (dotenv.error) throw dotenv.error;
    connection = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: "burgers_db"
    })
}

// connect to mysql
connection.connect(function (mysqlError) {
    if (mysqlError) {
        log(`mysqlError: ${mysqlError.stack}`)
        return
    }
    log(`mysql id: ${connection.threadId} connected to ${process.env.MYSQL_HOST}:${process.env.MYSQL_PORT}`);
})

// exports
module.exports = connection;
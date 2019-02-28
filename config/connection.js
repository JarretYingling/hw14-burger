"use strict";
const log = console.log

// require dotenv
const dotenv = require("dotenv").config({
    path: "git/.env"
});
// handle dotenv error
if (dotenv.error) {
    throw dotenv.error;
}

// require mysql
const mysql = require("mysql");
// creat mysql connection
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: ""
})

// connect to mysql
connection.connect(function (mysqlError) {
    if (mysqlError) {
        log(`mysqlError: ${mysqlError.stack}`)
        return
    }
    log(`mysql id: ${connection.threadId} connected to host: ${process.env.MYSQL_HOST} on port: ${process.env.MYSQL_PORT}`);
})

// exports
module.exports = connection;
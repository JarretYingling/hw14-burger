"use strict";
const log = console.log;

const connection = require("./connection.js");

// orm (object relational mapping)
const orm = {
    // selectAll()
    selectAll: function (tableName, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString,
            [tableName],
            function (mysqlError, mysqlResult) {
                if (mysqlError) throw mysqlError;
                log(mysqlResult);
                cb(mysqlResult);
            })
    },
    // insertOne()
    insertOne: function (tableName, columnName, value, cb) {
        const queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString,
            [
                tableName,
                {
                    [columnName]: value
                }
            ],
            function (mysqlError, mysqlResult) {
                if (mysqlError) throw mysqlError;
                log(mysqlResult);
                log(`inserted ${mysqlResult.changedRows} row`);
                cb(mysqlResult);
            }
        )
    },
    // updateOne()
    updateOne: function (tableName, setColumn, setValue, whereColumn, whereValue, cb) {
        const queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString,
            [
                tableName,
                {
                    [setColumn]: setValue
                },
                {
                    [whereColumn]: whereValue
                }
            ],
            function (mysqlError, mysqlResult) {
                if (mysqlError) throw mysqlError;
                log(mysqlResult);
                log(`updated ${mysqlResult.changedRows} row`);
                cb(mysqlResult);
            }
        )
    }
}

module.exports = orm;
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
            function (sqlError, sqlResult) {
                if (sqlError) throw sqlError;
                log("orm.selectAll:");
                log(sqlResult);
                cb(sqlResult);
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
            function (sqlError, sqlResult) {
                if (sqlError) throw sqlError;
                log(sqlResult);
                log(`inserted ${sqlResult.changedRows} row`);
                cb(sqlResult);
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
            function (sqlError, sqlResult) {
                if (sqlError) throw sqlError;
                log(sqlResult);
                log(`updated ${sqlResult.changedRows} row`);
                cb(sqlResult);
            }
        )
    },
    // deleteOne()
    deleteOne: function (tableName, columnName, value, cb) {
        const queryString = "DELETE FROM ?? WHERE ?";
        connection.query(queryString,
            [
                tableName,
                {
                    [columnName]: value
                }
            ],
            function (sqlError, sqlResult) {
                if (sqlError) throw sqlError;
                log(sqlResult);
                log(`deleted ${sqlResult.changedRows} rows`);
                cb(sqlResult);
            }
        )
    }
}

module.exports = orm;
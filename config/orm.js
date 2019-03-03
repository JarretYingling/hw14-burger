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
                log(JSON.parse(JSON.stringify(sqlResult)));
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
                log("orm.insertOne:");
                log(JSON.parse(JSON.stringify(sqlResult)));
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
                log("orm.updateOne:");
                log(JSON.parse(JSON.stringify(sqlResult)));
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
                log("orm.deleteOne:");
                log(JSON.parse(JSON.stringify(sqlResult)));
                log(`deleted ${sqlResult.changedRows} rows`);
                cb(sqlResult);
            }
        )
    }
}

module.exports = orm;
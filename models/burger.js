"use strict";
const log = console.log;

const orm = require("../config/orm.js");

let tableName = "";
let columnName = "";
let value = "";
let setColumn = "";
let setValue = "";
let whereColumn = "";
let whereValue = "";

// call ORM functions with burger input
const model = {
    // SELECT * FROM ??
    getBurgers: function () {
        orm.selectAll(tableName, function () {
            // orm query callback
        })
    },
    // INSERT INTO ?? SET ?
    addBurger: function () {
        orm.insertOne(tableName, columnName, value, function () {
            // orm query callback
        })
    },
    // UPDATE ?? SET ? WHERE ?
    devourBurger: function () {
        orm.updateOne(tableName, setColumn, setValue, whereColumn, whereValue, function () {
            // orm query callback
        })
    }
}

module.exports = model;
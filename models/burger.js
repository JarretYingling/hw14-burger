"use strict";
const log = console.log;

const orm = require("../config/orm.js");

// call ORM functions with burger input
const model = {
    // SELECT * FROM ??
    getBurgers: (reqBody, cb) => {
        orm.selectAll("burgers", cb);
    },
    // INSERT INTO ?? SET ?
    addBurger: (reqBody, cb) => {
        orm.insertOne("burgers", "burger_name", reqBody.burger_name, cb);
    },
    // UPDATE ?? SET ? WHERE ?
    devourBurger: (reqBody, cb) => {
        orm.updateOne("burgers", "devoured", true, "id", reqBody.id, cb);
    },
    // DELETE ?? WHERE ?
    vomitBurger: (reqBody, cb) => {
        orm.deleteOne("burgers", "id", reqBody.id, cb);
    }
}

module.exports = model;
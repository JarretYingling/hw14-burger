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
        orm.insertOne("burgers", "burger_name", reqBody.burgerName, cb);
    },
    // UPDATE ?? SET ? WHERE ?
    devourBurger: (reqBody, cb) => {
        orm.updateOne("burgers", "devoured", true, "burger_name", reqBody.burgerName, cb);
    },
    // DELETE ?? WHERE ?
    vomitBurger: (req, cb) => {
        orm.deleteOne("burgers", "burger_name", req.params.id, cb);
    }
}

module.exports = model;
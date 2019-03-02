"use strict";
const log = console.log;

const express = require("../server.js");
const db = require("../models/burger.js");

const router = (app) => {
    // http get
    app.get("/api/burgers", (req, res) => {
        db.getBurgers(req.body, (sqlResult) => {
            log("burgers-controller:");
            log(sqlResult);
            res.json(sqlResult);
        })
    })
    // http post

    // http put
}

// exports
module.exports = router;
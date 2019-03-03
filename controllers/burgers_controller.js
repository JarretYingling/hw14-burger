"use strict";
const log = console.log;

const express = require("../server.js");
const db = require("../models/burger.js");
const path = require("path");

const router = (app) => {
    // http get
    app.get("/", (req, res) => {
        log(req.body);
        db.getBurgers(req.body, (sqlResult) => {
            log("burgers-controller.getBurgers:");
            log(JSON.parse(JSON.stringify(sqlResult)));
            res.render("index", {
                burgers: sqlResult
            });
        });
    });
    // http post
    app.post("/", (req, res) => {
        log(JSON.parse(JSON.stringify(req.body)));
        db.addBurger(req.body, (sqlResult) => {
            log("burgers-controller.addBurger:");
            log(JSON.parse(JSON.stringify(sqlResult)));
            res.redirect("/");
        });
    });
    // http put
    // form method only allows get or post
    app.post("/put", (req, res) => {
        log(JSON.parse(JSON.stringify(req.body)));
        db.devourBurger(req.body, (sqlResult) => {
            log("burgers-controller.devourBurger:");
            log(JSON.parse(JSON.stringify(sqlResult)));
            res.redirect("/");
        });
    });
    // http delete
    // form method only allows get or post
    app.post("/delete", (req, res) => {
        log(JSON.parse(JSON.stringify(req.body)));
        db.vomitBurger(req.body, (sqlResult) => {
            log("burgers-controller.vomitBurger:");
            log(JSON.parse(JSON.stringify(sqlResult)));
            res.redirect("/");
        });
    });
};

// exports
module.exports = router;
"use strict";
const log = console.log

// require express
const express = require("express");
// instantiate express as app
const app = express();
// require express-handlebars
const hdb = require("express-handlebars");

// require path
const path = require("path");

// dynamic port or default 8080
const PORT = process.env.PORT || 8080;

// set static root to /public
app.use(express.static(path.join(__dirname, "/public")));

// express data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// configure express-handlebars
app.engine("handlebars", hdb({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// routes
require("./controllers/burgers_controller.js")(app);

// invoke express app listener
app.listen(PORT, () => {
    log(`express app listening on port ${PORT}`)
});
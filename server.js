"use strict";
const log = console.log

// require express
const express = require("express");
// instantiate express as app
const app = express();
// require express-handlebars
const hdb = require("express-handlebars");

// dynamic port or default 8080
const PORT = process.env.PORT || 8080;

// express data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// routes
require("./controllers/burgers_controller.js")(app);

// configure express-handlebars
app.engine("handlebars", hdb());
app.set("view engine", "handlebars");

// invoke express app listener
app.listen(PORT, () => {
    log(`express app listening on port ${PORT}`)
});
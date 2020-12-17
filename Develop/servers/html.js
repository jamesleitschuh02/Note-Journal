const db = require("../db/db.json");

const express = require("express");
const path = require("path");

module.exports = function (app) {
    app.use(express.static(path.join(__dirname, '../public')));

    app.get("/",(req,res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/notes",(req,res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
};
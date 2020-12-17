const db = require("../db/db.json");

const path = require("path");
const fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes", (req,res) => {
        res.json(db);
    });
};
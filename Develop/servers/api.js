const db = require("../db/db.json");

const path = require("path");
const fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes", (req,res) => {
        res.json(db);
    });


    app.post("/api/notes", (req,res) => {
        fs.readFile(path.join(__dirname, "../db/db.json"), (err,data) => {
            let dbData = JSON.parse(data);
            dbData.push(req.body);

            for (let i = 0;i < dbData.length; i++) {
                dbData[i].id = i;
            };

            fs.writeFile("./db/db.json", JSON.stringify(dbData), (err) => {
                res.send(dbData);
            });
        });
    });

    
    app.delete("/api/notes/:id", (req,res) => {
        fs.readFile("./db/db.json", (err,data) =>{           
            let dbData = JSON.parse(data);

            for (let i=0; i<dbData.length; i++) {
                if (i == req.params.id){
                    dbData.splice(i,1);
                }
            };

            fs.writeFile("./db/db.json", JSON.stringify(dbData), (err) => {
                res.send(dbData); 
            });
        });          
    });   
};
const my = require("mysql");

const db = my.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "go_coba",
});

db.connect(function (err) {
    if (err) throw err;
    console.log("database connected");
});

module.exports = db;

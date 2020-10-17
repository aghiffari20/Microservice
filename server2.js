const express = require("express");
const port = process.env.PORT || 5432;
const bodyParser = require("body-parser");
const controller = require("./controller");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./routes");
routes(app);

app.listen(port);

// const express = require("express");
// const my = require("mysql");

// const db = my.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "go_coba",
// });

// db.connect(function (err) {
//     if (err) throw err;
//     console.log("database connected");
// });

// const app = express();

// app.get("/getProduct", (req, res) => {
//     let json = {};
//     let q = `SELECT * FROM PRODUCTS`;

//     db.query(q, function (err, rows) {
//         if (err) {
//             json.err = err;
//             return res.send(JSON.stringify(json));
//         }
//         // console.log(rows);
//         json.product = rows;
//         res.send(JSON.stringify(json));
//     });
// }).listen(5432);

// console.log("Server running at http://127.0.0.1:5432/getproduct");

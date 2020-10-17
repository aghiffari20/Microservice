const response = require("./res");
const connection = require("./conn");

exports.getProduct = function (req, res) {
    connection.query(
        "SELECT sku,product_name,stocks FROM PRODUCTS ORDER BY sku DESC",
        function (error, rows) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        }
    );
};

exports.index = function (req, res) {
    response.ok("berhasil", res);
};

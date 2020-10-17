module.exports = function (app) {
    const todoList = require("./controller");

    app.route("/").get(todoList.index);
    app.route("/getProduct").get(todoList.getProduct);
};

const routeProducts = require("../client/products.route");
const routeCategories = require("../client/categories.route");

module.exports = (app) => {
    app.use("/", routeProducts);
    app.use("/", routeCategories);
}
const routeProducts = require("../client/products.route");
const routeCategories = require("../client/categories.route");
const routeUsers = require("../client/user.route");
const routeCart = require("../client/cart.route");

module.exports = (app) => {
    app.use("/", routeProducts);
    app.use("/", routeCategories);
    app.use("/", routeUsers);
    app.use("/", routeCart);
}
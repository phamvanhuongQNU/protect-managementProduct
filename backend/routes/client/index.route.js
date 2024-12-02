const routeProducts = require("../client/products.route");

module.exports = (app) => {
    app.use("/", routeProducts);
}
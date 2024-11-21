const PathAdmin = require("../../config/system");
const routeProducts = require("../admin/products.route");
const routeCategories= require("../admin/categories.route");
module.exports = (app) => {
    app.use(PathAdmin + "/", routeProducts);
    app.use(PathAdmin + "/", routeCategories);
};

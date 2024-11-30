const PathAdmin = require("../../config/system");
const routeProducts = require("../admin/products.route");
const routeCategories= require("../admin/categories.route");
const routeUsers= require("../admin/users.route");
module.exports = (app) => {
    app.use(PathAdmin + "/", routeProducts);
    app.use(PathAdmin + "/", routeCategories);
    app.use(PathAdmin + "/", routeUsers);
};

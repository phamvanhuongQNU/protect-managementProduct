const PathAdmin = require("../../config/system");
const routeProducts = require("../admin/products.route");
const routeCategories= require("../admin/categories.route");
const routeUsers= require("../admin/users.route");
const routeRoles= require("../admin/role.route");
const authorMiddleware = require('../../middleware/auth.middleware')
module.exports = (app) => {
    app.use(PathAdmin + "/",authorMiddleware, routeProducts);
    app.use(PathAdmin + "/",authorMiddleware, routeCategories);
    app.use(PathAdmin + "/",authorMiddleware, routeUsers);
    app.use(PathAdmin + "/",authorMiddleware, routeRoles);
};

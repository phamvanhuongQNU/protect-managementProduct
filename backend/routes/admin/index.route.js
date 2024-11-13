const PathAdmin = require("../../config/system");
const routeProducts = require("../admin/products.route");
module.exports = (app) => {
    app.use(PathAdmin + "/", routeProducts);
};

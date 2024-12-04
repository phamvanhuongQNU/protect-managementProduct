const express = require("express");
const route = express.Router();
const controller = require("../../controllers/client/category.controller")
route.get("/categories",controller.getCategories)

module.exports = route
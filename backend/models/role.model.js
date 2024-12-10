const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
    _id : String,
    name : String,
    permissions : [String]

})
const Role = mongoose.model("Role",RoleSchema,"roles");
module.exports = Role
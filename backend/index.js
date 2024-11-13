const express = require("express");
const routesAdmin = require("./routes/admin/index.route")
const databse = require("./config/database")
const cors = require('cors')
const dotenv = require("dotenv").config();
const app = express();
const port = dotenv.parsed.PORT;

app.use(cors());
app.use(express.json());
routesAdmin(app)
databse.connect(dotenv.parsed.URL_MONGO)
app.listen(port,()=>{
    console.log(port + "success")
})

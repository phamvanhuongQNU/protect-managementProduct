const express = require("express");
const cookieParser = require("cookie-parser")

const routesAdmin = require("./routes/admin/index.route");
const routeClient = require("./routes/client/index.route");
const databse = require("./config/database")
const cors = require('cors')
const dotenv = require("dotenv").config();
const app = express();
const port = dotenv.parsed.PORT;
app.use(cookieParser())
// cors
var corsOptions = {
     "origin" : "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
  }
app.use(cors(corsOptions));
app.use(express.json());
routesAdmin(app);
routeClient(app);
databse.connect(dotenv.parsed.URL_MONGO)
app.listen(port,()=>{
    console.log(port + "success")
})

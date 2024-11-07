const express = require("express");
const app = express();
const port = 5000;


app.get("/",(req,res) =>{
    res.send("OK")
})
app.listen(port,()=>{
    console.log("Tao cong thanh cong")
})
const express = require("express");
const app = express();
const port = 8000;
const mysql = require('mysql2');
const cors = require('cors');
require("./db/conn");
const router = require("./Routes/router");


// app.get("/",(req,res)=>{
//     res.send("server start")
// });

// middleware
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(port,()=>{
    console.log("server start at port no :" + port); 
})
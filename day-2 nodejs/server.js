// let http = require("http");
// let server = http.createServer((req,res)=>{
//     console.log("hello")
//     res.end("ok mene tumhari bat man lii hai")

    
// });
// server.listen(3000,() =>{
//     console.log("server is running on port 3000")
// })


const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("ok mene tumhari bat man lii hai")
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

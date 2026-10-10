let http = reqire("http");
let server = http.createServer((req,res)=>{
    console.log("hello i am coming from server");
    res.end("ok mene tumhari bat sun lii")
});






server.listen(3000,()=>{
    console.log("server is running on port 3000");
});



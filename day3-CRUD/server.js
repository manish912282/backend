const express =(require("express"));
const app=express();
app.use(express.json());
let arr=[]
app.post("/create",(req,res)=>{
    let body=req.body;
    arr.push(body);
    res.send(body)
})
app.get("/",(req,res)=>{
    res.send("ok ham aa gaye hai")
})
app.listen(3000,()=>{
    console.log("server is runing on 3000")
})

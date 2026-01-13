require("dotenv").config()
const express=require ("express")
const app=express();
const port=5000;
app.use(express.json());
app.get("/",(req,res)=>{
    const data=req.body;
   
    res.send("<h1>Hello world</h1>")
})

app.get("/health",(req,res)=>{
    res.send({
        status:"Ok",
        message:"Server is healthy",
        uptime:process.uptime()
    })
})

app.listen(port,()=>{
    console.log("Server started at port ",port);
})
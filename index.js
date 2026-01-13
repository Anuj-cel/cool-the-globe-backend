const express=require ("express")
const app=express();
const port=5000;
app.use(express.json());
app.get("/",(req,res)=>{
    const data=req.body;
    console.log("this is data ",data);
    res.send("<h1>Hello world</h1>")
})

app.listen(port,()=>{
    console.log("Server started at port ",port);
})
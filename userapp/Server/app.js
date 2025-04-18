const express=require('express');
const dotenv=require('dotenv');
const cors=require("cors");
const userroutes=require("./Routes/userRoutes");
const dbConnect=require('./config/db')
dotenv.config();
const app=express();
const Port=process.env.PORT || 3000;
dbConnect();
app.use(cors());
app.use(express.json());
app.use("/",userroutes)
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`)
})
const User=require('../model/userModel');
const getAllUsers=async(req,res)=>{
     try{
        const users= await User.find();
        res.status(200).json(users);
     }
     catch(err){
       res.status(500).json({message: err.message})
     }
}
const getUser=async(req,res)=>{
    try{
        const email=req.params.email;
       const user= await User.find({email});
       res.status(200).json(user);
    }
    catch(err){
      res.status(500).json({message: err.message})
    }
}
const createUser=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
       const newUser=new User({name,email,password,role});
       const user=await newUser.save();
       res.status(200).json(user);
    }
    catch(err){
      res.status(500).json({message: err.message})
    }
}

module.exports={getAllUsers,getUser,createUser}
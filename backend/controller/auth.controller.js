const { createtoken } = require('../util/token.js');
const User= require('../models/user.model.js');
const bcrypt = require('bcryptjs')

const signup = async (req,res)=>{
   try {
      const {username , email , password , createdat} = req.body;
      const existinguser = await User.findOne({email})
      if(existinguser){
         res.status(400).json({message:"user already exist"})
      }
      const hashpassword = await bcrypt.hash(password,10);
      const newuser = await User.create({
         username,
        email,
        password:hashpassword,
         createdat
      })
      res.status(200).json({message:"signup successfully" , newuser})
   } catch (error) {
      res.status(500).json({message:error.message})
   }
}
const login = async (req, res) =>{
   try {
      const {email , password} = req.body;
   const user = await User.findOne({email})
   if(!user){
      res.status(400).json({message:"incorrect-email"})
   }
   const comparepassword = await bcrypt.compare(password,user.password)
   if(!comparepassword){
      res.status(400).json({message:"incorrect-password"})
   }
   await res.status(200).json({message:"login succesfully"})
   } catch (error) {
       await res.status(500).json({message:error.message})
   }
}
module.exports = {signup , login}
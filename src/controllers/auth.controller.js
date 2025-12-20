const User = require("../models/user.model");
const cookies = require("cookie-parser");
const session = require("express-session");



exports.signupUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
      return res.status(400).json({ error: "Missing required fields" });
    }
    const existingUser = await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({ error: "User already exists" });
    }
  

    const user = await User.create({name,email,password});
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.loginUser = async (req, res) => {
  try{
    const {email,password} = req.body;
    if(!email || !password){
      return res.status(400).json({ error: "Missing required fields" });
    }
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({ error: "User not found" });
    }
    
   //const ismatch = await bcrypt.compare(password,user.password);
    if(user.password !== password){
      return res.status(401).json({ error: "Invalid password" });
    }
   req.session.userId = user._id;
   res.cookie("token",user._id, 
    {httpOnly:true,
    maxAge:60*60*1000});
   return res.status(200).json({
      message: "User logged in successfully",
      user:
      {
        _id : user._id,
        name : user.name,
        email : user.email,
        createdAt : user.createdAt
      }
    });
  }catch(error){
      res.status(500).json({ error: error.message });
    }
};
exports.logoutUser = (req,res)=>{
  try{
    req.session.destroy();
    res.clearCookie("token");
    res.status(200).json({message:"User logged out successfully"});
  }
  catch(error){
    res.status(500).json({ message:"user logout failed"});
  }
}
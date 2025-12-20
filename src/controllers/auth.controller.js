const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.signupUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
      return res.status(400).json({ error: "Missing required fields" });
    }
    const existingUser = await User.findOne({ email });
    if(existingUser){
      return res.status(409).json({ error: "User already exists" });
    }
   const hashedPassword = await bcrypt.hash(password, 10);
  
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
  
    res.status(201).json({
      message: "User created successfully",
    });
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

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(401).json({ error: "Invalid password" });
    }

    
  const token = jwt.sign(
    {userId:user._id},
   process.env.JWT_SECRET,
   {expiresIn: process.env.JWT_EXPIRES_IN}
   );


    
    res.status(200).json({
      message: "User logged in successfully",
      token,
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

exports.logOutUser = (req,res)=>{
  res.status(200).json({message:"User logged out successfully"});
}

 
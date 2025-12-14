const User = require("../models/user.model");

exports.createUser = async (req, res) => {

  try {
    const {name, email, password} = req.body;
    if(!name || !email || !password){
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await User.create(req.body);
    res.status(201).json({
      _id : user._id,
      name : user.name,
      email : user.email,
      createdAt : user.createdAt
     
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getuserbyid =async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    if(!user){
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({message:"invalid id" });

  }
}
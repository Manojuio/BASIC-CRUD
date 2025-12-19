const validatorUser = (req,res,next)=>{
    const{name,email} = req.body;
    if(!name || !email){
        return res.status(400).json({message:"Missing required fields"});
    }
    next();
};
module.exports = validatorUser;
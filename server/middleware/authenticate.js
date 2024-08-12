const  jwt = require('jsonwebtoken');
const User = require("../models/userschema")

const Authenticate = async (req,res,next) => {
    try{
        const token = req.cookies.Sharecookie;
        const verifyed = jwt.verify(token, process.env.SECRET_KEY);

        const rootU = await User.findOne({_id:verifyed._id, "tokens.token":token});

        if(!rootU){
            throw new Error("User not Found") 
        }
        req.token = token;
        req.rootU = rootU;
        req.userID = rootU._id; 
 
        next();

    }catch(err){
        res.status(401).send("unauthorised")
        console.log(err); 
    } 
}

module.exports = Authenticate;
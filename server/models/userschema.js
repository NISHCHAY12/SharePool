const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        required:true,
        type: String
    },
    email:{
        required:true,
        type: String
    },
    phone:{
        required:true,
        type: Number
    },
    address:{
        required:true,
        type: String
    },
    age:{
        required:true,
        type: Number
    },
    password:{
        required:true,
        type: String
    },
    cpassword:{
        required:true,
        type: String
    },
    profilepic:{
        type: String,
        required:true,
        default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    },
    liscence:{
        type: String
    },
    tokens:[
        {
            token:{
                required:true,
                type: String
            }
        }
    ]
})


userSchema.pre('save' , async function (next) {
    console.log("inside");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12);
        this.cpassword = await bcrypt.hash(this.cpassword , 12); 
    }
    next();
}); 


userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token
    }catch (err){
        console.log(err);
    } 
}




// const User = mongoose.model('USER',userSchema);

module.exports = User = mongoose.model('USER', userSchema);
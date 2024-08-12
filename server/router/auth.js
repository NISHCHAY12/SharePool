const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const authenticate = require("../middleware/authenticate") 

require('../db/conn');
const User = require("../models/userschema");
const Ride = require("../models/rideschema");


const filestorage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null , '../server/assets/images')
    },
    filename: (req,file,cb) => {
        cb(null , Date.now() + "_" + file.originalname)
    }
})

const upload = multer({storage:filestorage})









router.get('/', (req,res) => {
    res.send('Server is Running currently at Home from router ');
    try{
        this.post.find({}).then(data => {
            res.json(data)
        }).catch(error => {
            res.status(408).json({error})
        })
    }catch(err){
        res.json({err})
    }
});


// router.get('/login', (req,res) => {
//     res.send('Log In to Service');
// });



// Using Promises to save signup data in database

// router.post('/signup', (req,res) => { 
//     const { name, email, phone, address, age, password, cpassword} = req.body;

//     if(!name || !email || !phone || !address || !age || !password || !cpassword)
//     {
//         return res.status(422).json({error:"pls fill form"});
//     }

//     User.findOne({email:email}).then((userExists) => {
//         if(userExists){
//             return res.status(422).json({error:"User exists with this email"});
//         }

//         const user = new User({name, email, phone, address, age, password, cpassword});

//         user.save().then(() => {
//             res.status(201).json({message:"data saved successfully"});
//         }).catch((err) => {
//             res.status(500).json({error:"data error ... data not saved in DB"})
//         })

//     }).catch((err) => {
//         console.log(err);
//     })
// });



// using async-await to store signup data into database

router.post('/signup', async (req,res) => {
    const { name, email, phone, address, age, password, cpassword} = req.body;

    if(!name || !email || !phone || !address || !age || !password || !cpassword)
    {
        return res.status(422).json({error:"pls fill form"});
    }

    try{
        const userExists = await User.findOne({email:email})
        
        if(userExists){
            return res.status(422).json({error:"User exists with the entered email"});
        }else if(password != cpassword){
            return res.status(422).json({error:"passwords don't match"});
        }else{
            const user = new User({name, email, phone, address, age, password, cpassword});

            await user.save();
        }
        

        res.status(201).json({message:"data saved successfully"});
    }   catch(err) { 
        console.log(err);
    }
});




// Login Route

router.post('/login', async (req,res) => {
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"Enter details in fields"});
        }

        const userExists = await User.findOne({email:email})

        if(userExists){
            const match = await bcrypt.compare(password , userExists.password);

            const token = await userExists.generateAuthToken();
            console.log(token);

            res.cookie("Sharecookie", token , {
                expires:new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if(!match)
            {
                return res.status(400).json({error:"Incorrect credentials!"});
            }
            res.json({message:"User signin successfull"});
        }
        else{
            return res.status(400).json({error:"Incorrect credentials!"});
        }

    }catch(err){
        console.log(err);
    } 
});







router.post('/single',upload.single('picture') , (req,res) => {

    console.log(email)
    res.send("file uploaded");
})

 



router.post('/addr', authenticate, async (req,res) => {
    // res.send('Add a new Ride');
    const { from,to,date,time,passenger } = req.body;
    // console.log(req.body);

    if(!from || !to || !date || !time || !passenger )
    {
        return res.status(422).json({error:"pls fill form"});
    }

    try{
        const token = req.cookies.Sharecookie;
        const verifyed = jwt.verify(token, process.env.SECRET_KEY);
        const rootU = await User.findOne({_id:verifyed._id, "tokens.token":token});
        publisher_id=rootU.id
        publisher=rootU.name

        const ride = new Ride({publisher_id , publisher , from , to , date  , passenger});

            await ride.save();
        
        console.log(rootU.id);
    }   catch(err) {
        console.log(err);
    }
});


// router.get('/addr', authenticate, (req,res) => {
//     res.send('Add a new Ride'); 
// });

router.get('/ride',authenticate , async (req,res) => {
    const exists = await Ride.find({})
    // const exist = JSON.parse(exists);
    console.log(exists)
    res.send(exists);
});

router.get('/prof' ,authenticate , (req,res) => {
    res.send(req.rootU);
});

module.exports = router;
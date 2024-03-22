const useres = require('../models/User');
const users=require('../models/User')

const signupController=async(req,res)=>{
    console.log("SignupController");

    const email=req.body.email;
    const password=req.body.passeord;

    if(!email||!password)
    {
        res.status(403).send("Email and password are required");
        return;
    }

    const id=Math.floor(Math.random()*1000);
    useres.push({
        id,
        email,password
    })
    res.status(200).json(user);
}
const loginController=async (req,res)=>{
    console.log("loginController");
    res.send('loginController')
}

module.exports={
    signupController,
    loginController
}
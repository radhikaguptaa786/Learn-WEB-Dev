const { signupController, loginController } = require('../controllers/auth');
const log=require('../middleware/Logger')
const router=require('express').Router();

// router.post("/login",(req,res) =>{
//     res.send("This is for login")
// })

router.post("/signup",signupController)
router.post("/login",log ,loginController)
// router.post("/signup",(req,res)=>{
//     res.send("This is for sign up");
// })




module.exports=router;
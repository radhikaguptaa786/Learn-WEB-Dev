const router=require('express').Router();

router.get("/",(req,res) =>{
    res.json({
        id:'2323',
        title:'hello'
    })
})
router.post("/",(req,res)=>{
    
})
module.exports=router;
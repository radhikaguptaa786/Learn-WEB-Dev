// import xyz from "./utils"  //ES6 syntax


// import is used inside react and require is used inside node
// const utils =require("./utils")  //JS Syntax

// console.log(utils.multiply(3,6));
// console.log(utils.log.warning("This is an info"));
// utils.log.error(("This is an error"));

const express=require('express');

const app=express();

//our own api
app.get('/user',(req,res) =>{
    console.log('user was called');
    res.send(
        {
            name:"Radhika",
            age:22,
        }
    );
})


app.get('/',(req,res)=>{
    // res.sendFile(__dirname+'/index.html');
//    json and send are same but json send only json data
    res.json({
        success:true,
    });
});
app.listen(4000,()=>{
    console.log("Listening on port : 4000");
})
const dotenv=require('dotenv');
dotenv.config({path:'./file.env'})

const express=require('express');

// const postRouter=require('./routes/post');
// const authRouter=require('./routes/auth');
const mainRouter=require('./routes/index');
const app=express();

// middleware
app.use((req,res,next)=>{
    console.log(req.url,new Date().toTimeString());
    next()
})
// app.use('/post',postRouter)
// app.use('/auth',authRouter)

app.use("/api",mainRouter)
app.get("/",(req,res) =>{
    res.send({
        data:'ok'
    })
})


PORT=process.env.PORT; 
console.log("Port",PORT);
app.listen(PORT,()=>{
    console.log('Started Listening on port: 4000');
})
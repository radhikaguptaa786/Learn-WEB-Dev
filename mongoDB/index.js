const mongoose=require('mongoose');

const User=require('./models/Users')
// in connect method we tell url to which databse of mongo db we are going to connect
mongouri="mongodb+srv://Radhika:yVAJ7hwf0yLjSSoK@cluster0.d9nvyxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
try{
mongoose.connect(mongouri,
  {
    // useNewUrlParser:true,
    useUnifiedTopology:true,
  },
);
}catch(e)
{
    console.log(e);
}


async function createUSer(newUser){
const user=new User(newUser)

    const data=await user.save()
    console.log(data);
}

createUSer({
    email:'gupta@gmail.com',
    password:'1234'
})
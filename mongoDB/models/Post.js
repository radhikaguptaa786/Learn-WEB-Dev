const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:String,
    description:String,
    likesCount:Number,
    user:mongoose.Types.objects
});

module.exports=mongoose.model('post',postSchema);
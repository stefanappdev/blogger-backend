const mongoose=require('mongoose');

const blogSchema=new mongoose.Schema({
    _id_User:{type:String,required:true},
    title:{type:String,required:true},
    body:{type:String,required:true},
    snippet:{type:String},
})




module.exports=blogSchema;
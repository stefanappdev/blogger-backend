const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    Username:{type:String,required:true},
    _id_User:{type:String,required:true},
    Password:{type:String,required:true},
    isRegistered:{type:Boolean,required:true},
})


module.exports=UserSchema
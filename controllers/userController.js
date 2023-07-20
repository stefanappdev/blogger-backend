const dotenv=require('dotenv').config();
const mongoose=require('mongoose');
const UserSchema=require('../Schemas/User')
const DB=mongoose.createConnection(process.env.MONGO_URI);
const User=DB.model('user',UserSchema);


const GET_USERS=(req,res)=>{
    User.find()
    .then((USERS)=>{
        res.json(USERS).status(200)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

const GET_USER=(req,res)=>{
    User.findById(req.params.id)
    .then((USER)=>{
        res.json(USER).status(200)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

const DELETE_USER=(req,res)=>{
     User.findByIdAndDelete(req.params.id)
     .then((USER=>{
         res.json(USER).status(200)
     }))
}

const POST_USER=(req,resp)=>{

    const user=new User(req.body)
    console.log(user)
    user.save()
    .then((result)=>{
        resp.json(user).status(200)
    })
    .catch((err)=>{
        resp.json({message:err.message}).status(404)
    })

}

const UPDATE_USER=(req,resp)=>{
    User.findByIdAndUpdate(req.params.Username,req.body)
    .then((USER)=>{
        resp.json(USER).status(200)
    })
    .catch((err)=>{
        resp.json({message:err.message}).status(404)
    })
}



module.exports={
    GET_USERS,
    POST_USER,
    GET_USER,
    DELETE_USER,
    UPDATE_USER,

    };
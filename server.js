const express=require('express');
const app=express();
const port=5000;
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes.js');
const dotenv=require('dotenv').config();
app.set('view engine','ejs');

const cors=require('cors')
app.use(cors({origin:['http://localhost:3000','https://simple-blogger-app.onrender.com']}));


const connect=()=>{
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected")
}

connect();


app.listen(port,()=>{

    console.log(`server is running on port ${port}` );
})





app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.use('/blogs',blogRoutes);
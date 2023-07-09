const express=require('express');
const app=express();
const port=5000;
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes.js');
app.set('view engine','ejs');

const cors=require('cors')
app.use(cors({origin:'http://localhost:3000'}));


const connect=()=>{
    let dbURI='mongodb+srv://ailifeadvice2:6BWn4dj2lHbvnskD@nodetuts.okywb1x.mongodb.net/?retryWrites=true&w=majority';
    mongoose.connect(dbURI);
    console.log("Database is connected")
}

connect();


app.listen(port,()=>{

    console.log(`server is running on port ${port}` );
})


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/blogs",blogRoutes);
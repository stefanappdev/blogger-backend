const Blog=require('../models/Blog');


const GET_BLOGS=(req,res)=>{
    Blog.find()
    .then((blogs)=>{
        res.json(blogs).status(200)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

const FIND_BLOG=(req,res)=>{
    Blog.findById(req.params.id)
    .then((blog)=>{
        res.json(blog).status(200)
    })
    .catch((err)=>{
        console.log(err.message)
    })
}

const DELETE_BLOG=(req,res)=>{
     Blog.findByIdAndDelete(req.params.id)
     .then((blog=>{
         res.json(blog).status(200)
     }))
}

const POST_BLOG=(req,resp)=>{
    
    const blog=new Blog(req.body);
    console.log(blog)
    blog.save()
    .then((result)=>{
        resp.json(blog).status(200)
    })
    .catch((err)=>{
        resp.json({message:err.message}).status(404)
    })

}

const UPDATE_BLOG=(req,resp)=>{
    Blog.findByIdAndUpdate(req.params.id,req.body)
    .then((blog)=>{
        resp.json(blog).status(200)
    })
    .catch((err)=>{
        resp.json({message:err.message}).status(404)
    })
}



module.exports={
    GET_BLOGS:GET_BLOGS,
    POST_BLOG:POST_BLOG,
    FIND_BLOG:FIND_BLOG,
    DELETE_BLOG:DELETE_BLOG,
    UPDATE_BLOG:UPDATE_BLOG

    };
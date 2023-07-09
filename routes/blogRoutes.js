const express=require('express');
const router=express.Router();
const blogController=require('../controllers/blogController.js');


router.get('/',blogController.GET_BLOGS);
router.get('/:id',blogController.FIND_BLOG);
router.delete('/:id',blogController.DELETE_BLOG);
router.put('/:id',blogController.UPDATE_BLOG);
router.post('/',blogController.POST_BLOG);









module.exports=router;
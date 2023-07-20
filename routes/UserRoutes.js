const express=require('express');
const router=express.Router();
const UserController=require('../controllers/userController.js');


router.get('/',UserController.GET_USERS);
router.get('/:id',UserController.GET_USER);
router.delete('/:id',UserController.DELETE_USER);
router.put('/:id',UserController.UPDATE_USER);
router.post('/',UserController.POST_USER);









module.exports=router;
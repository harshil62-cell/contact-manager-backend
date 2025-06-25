const express=require('express');
const {loginUser,registerUser,currentUser}=require('../controllers/userController')
const router=express.Router();

router.post('/register',registerUser);
router.post('/login',loginUser);
router.post('/current',currentUser);

module.exports=router;


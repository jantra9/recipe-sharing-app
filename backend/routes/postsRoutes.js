const express=require('express');
const { createPost } = require('../controllers/postsController');
const router=express.Router();

router.post("create-post",createPost)

module.export=router
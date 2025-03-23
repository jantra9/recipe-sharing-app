const express= require("express");
const {createUser,loginUser } = require("../controllers/usersController");
const router= express.Router();

router.post("/create-user",createUser);

router.post("/log-in",loginUser)
module.exports= router;
const User= require("../models/usersModel");
const bcrypt= require("bcrypt");
require('dotenv').config();
const jwt=require("jsonwebtoken");

async function createUser(req, res){
    try {
        const {username, email, password} = (req.body);
        const hashedPassword= await bcrypt.hash(password, 10)
        const newUser= await User.create({
            username,
            email,
            password:hashedPassword
        })
        //Send response
        res.status(200).json({message:"new user is created",newUser})
    } catch (error) {
        res.status(500).json({error})
    }
}

async function loginUser(req, res){
    try {
        const {username, password} = (req.body);

        //Check username
        const existingUser= await User.findOne({where:{username}});

        if(!existingUser){res.status(404).json({error:"User is not found"})};

        //Check password
        const isPasswordValid=await bcrypt.compare(password,existingUser.password);

        if(!isPasswordValid){res.status(401).json({error:"Incorrect password"})};

        if(existingUser && isPasswordValid){
            const accessToken= jwt.sign({
                user:{
                    username:existingUser.username,
                    id:existingUser.id,
                }
            },process.env.SECRETKEY,
            {expiresIn:"1h"});
            res.status(200).json({accessToken,message:"Log in successful!"})
        }

    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports={createUser, loginUser};
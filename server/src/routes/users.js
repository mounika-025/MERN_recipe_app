import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router =express.Router();

router.post("/register",async (req, res)=>{
    const {username,password}=req.body;  //get username and password from frontend
    
    const user= await UserModel.findOne({username}); //finds the username in model
    
    res.json(user);
    
});

router.post("/login");


export {router as userRouter};
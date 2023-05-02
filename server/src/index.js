import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from './routes/users.js'; 

const app= express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
//generates connection towards server
mongoose.connect("mongodb+srv://mounika025:mouni2000@recipe.sasj4ba.mongodb.net/recipe?retryWrites=true&w=majority")

app.listen(3005,()=>console.log("Server started"));


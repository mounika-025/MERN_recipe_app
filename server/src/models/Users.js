import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
});


//modal=>would be the description of how a table /collection in our database will look like

export const UserModel=mongoose.model("users",UserSchema)
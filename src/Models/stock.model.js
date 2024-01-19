import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
   username:{
    type:String,
    required:true,
    unique:true
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   fav:{
    type:Array[
      {
        type:mongoose.Schema.type.objectId,
        ref:"Stock"
      }
    ]
   }
})
export const User=mongoose.model("User",userSchema);
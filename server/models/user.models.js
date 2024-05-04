import mongoose from "mongoose";


const UserProfileSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:false
    },
    profile_photo:{
        type:String,
        required:false
    },
    cover_photo:{
        type:String,
        required:false
    },
    interests:{
        type:[String],
        required:false
    },
    QrCOde:{
        type:String,
        required:false
    
    }

})

const UserProfile=mongoose.model('UserProfile',UserProfileSchema)

export default UserProfile



  
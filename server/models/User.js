import mongoose from "mongoose";    

const userSchema = new mongoose.Schema({

    _id : {
        type : mongoose.Schema.Types.ObjectId,
        default : () => new mongoose.Types.ObjectId(),
    },
    username: {
        type : String,
        required : true,
        unique : true,
        trim: true,
        minlength: 4,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase: true,
    },
    password : {
        type : String,
        required : true,
        minlength: 6,
    },
    Skills: {
        type : [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model("User", userSchema);    

export default User;
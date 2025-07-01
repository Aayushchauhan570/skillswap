import mongoose from "mongoose";


const UserProfileSchema = new mongoose.Schema({

    _id: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name : String,
    bio : String,
    experience : [String],
    SkillsToTeach : [String],
    SkillsToLearn : [String],
    youtubeUrl : String,
}, {timestamps : true});

const userProfile = mongoose.model('UserProfile', UserProfileSchema);

export default userProfile;
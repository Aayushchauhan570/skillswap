import express from "express";
import verifyToken from "../middleware/auth.js";
import userProfile from "../models/userProfile.js";

const userProfileRouter = express.Router();

userProfileRouter.post('/createProfile', verifyToken, async (req, res) => {
    const {name, bio, experience, SkillsToTeach, SkillsToLearn, youtubeUrl} = req.body;
    try {
        let profile = await userProfile.findOne({_id: req.user.id});
        if(profile){ //updation
            profile.name = name;
            profile.bio = bio;
            profile.experience = experience;
            profile.SkillsToTeach = SkillsToTeach;
            profile.SkillsToLearn = SkillsToLearn;
            profile.youtubeUrl = youtubeUrl;
            await profile.save();
            return res.status(200).json({message: "Profile updated successfully", profile});
        }else {
            //new user profile creation
            profile = new userProfile({
                _id: req.userid,
                name,bio, experience,
                SkillsToLearn,
                SkillsToTeach,
                youtubeUrl,
            })

            await profile.save();

            res.status(201).json({message: "Profile created successfully", profile});
        }
    }catch(err) {
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
})

// route to get user profile 

userProfileRouter.get('/getprofile', verifyToken, async (req, res) => {
    try {
        const profile = await userProfile.findOne({userId: req.user.id});
        res.status(200).json({profile});
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Internal server error"});
    }
    
})


// route to get user profile based on userid

userProfileRouter.get('/getprofile/:_id', verifyToken, async (req, res) => {
    const {userId} = req.params;
    try {
        const profile = await userProfile.findOne({userId});
        if(profile) {
            res.status(200).json({message : "profile found succesfully", profile});
        }else {
            res.status(404).json({message: "profile not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
})




export default userProfileRouter;// This code defines routes for creating and retrieving user profiles in an Express application.
// It includes functionality to create or update a profile, retrieve the current user's profile,
// and retrieve a profile by user ID, all while ensuring the user is authenticated using a middleware.
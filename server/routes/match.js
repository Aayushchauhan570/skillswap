import express from 'express';
import verifyToken from '../middleware/auth.js';
import userProfile from '../models/userProfile.js';

const ProfileMatch = express.Router();


ProfileMatch.get('/match', async (req, res) => {
    const currentUser = '6863b008578ff195dbcb0cf5'; // Get the current user's ID from the request object

    // Find profiles that match the user's skills to learn and skills to teach
    // Exclude the current user from the results
    try {
        const matchedProfiles = await userProfile.find({
            _id: { $ne : currentUser }, // Exclude current user
            SkillsToTeach: { $in: currentUser.SkillsToLearn }, // Match profiles that can teach skills the user wants to learn
            SkillsToLearn: { $in: currentUser.SkillsToTeach } // Match profiles that want to learn skills the user can teach
        }).limit(10); // Limit results to 10 profiles
        res.status(200).json({message: "Matched profiles fetched successfully", matchedProfiles});
    } catch (error) {
        console.log("Error fetching matched profiles:", error);
        res.status(500).json({message: "Internal server error"});
    }
})

export default ProfileMatch;
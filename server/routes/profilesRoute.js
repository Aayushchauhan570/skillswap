import express from 'express';
import userProfile from '../models/userProfile.js';

const router = express.Router();

router.get('/public/all', async (req, res) => {
    try{
        const profiles = await userProfile.find().limit(20);
        res.status(200).json(profiles);
    } catch (error) {
        console.log("Error fetching profiles:", error);
        res.status(500).json({message: "Internal server error"});
    }
})

export default router;
import express, { json } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const router = express.Router();


// Route to handle user signup
// POST /signup
router.post('/signup',async (req, res) => {
    const {username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({email});
        if(existingUser){
            alert("user already exists");
            return res.status(400).json({message: "user already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '2d'});

        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
            sameSite: 'lax', // Adjust based on your needs
            maxAge: 2 * 24 * 60 * 60 * 1000 // 2 days
        })

        res.json({token, user: {id: newUser._id, username: newUser.username, email: newUser.email}, message: "signup successful"});

        res.status(201).json({message : "user created successfully", user : newUser});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "internal server error"});
    }
    
})


// Route to handle user login
// POST /login
router.post('/login', async (req,res) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message : "user does not exist"});

        const isvalid = await bcrypt.compare(password, user.password);
        if(!isvalid) return res.status(400).json({message : "invalid credentials"});

        const token = jwt.sign({id : user._id}, process.env.JWT_SECRET, {expiresIn: '2d'});

        res.cookie('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            maxAge: 2 * 24 * 60 * 60 * 1000 // 2 days
        })
        res.json({token, user: {id: user._id, username : user.username, email: user.email}, message: "login successful"});


    }catch(err){
        console.log(err);
        res.status(500).json({message: "internal server error"});
    }
});

//Route to logout user
router.post('/logout',async (req, res)=> {
    try {
        res.clearCookie('token');
        res.status(200).json({message: "logout successful"});
    } catch (error) {
        res.status(500).json({message: "internal server error"});
        console.log(error);
    }
})

export default router;
import express from 'express';
import connectDB from './config/DB.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';    
import router from './routes/auth.js';
import userProfileRouter from './routes/userProfile.js';
import publicProfile from  './routes/profilesRoute.js'
import ProfileMatch from './routes/match.js';

const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: process.env.CLIENT_URL, // Adjust this to your client URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allow specific methods
    allowedHeaders: 'Content-Type,Authorization', // Allow specific headers
}));

app.use('/api', router);
app.use('/api', userProfileRouter);
app.use('/api/profiles',publicProfile);
app.use('/api', ProfileMatch);

app.get('/', (req,res) =>{
    res.send("Welcome to the SkillShare API");
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${8080}`);
    connectDB();
})

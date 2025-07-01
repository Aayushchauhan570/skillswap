import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if(!token) res.status(401).json({message: "Unauthorized access, please login first"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        console.error(err);
        res.render()
        res.status(401).json({message: "Invalid token, please login again"});
    }
}

export default authMiddleware;

// This middleware checks for a valid JWT token in the request cookies.
// If the token is valid, it decodes the user information and attaches it to the request object.
// If the token is missing or invalid, it responds with an unauthorized status.
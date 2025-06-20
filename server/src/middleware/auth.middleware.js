const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req,res,next) =>{
    const token = req.cookies.token;


    if(!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized access, please login"
        });
    }

    try {
        const decoded = jwt.verify(token, "ashish");

        req.user = decoded
        
        next();
        
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid token, unauthorized access"
        })        
    }
}
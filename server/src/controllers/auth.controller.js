
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const userModel = require("../models/User");


module.exports.registerUser = async (req, res) => {
    
    const { userName, email, password } = req.body;

    try{

        const checkUser = await userModel.findOne({ email });

        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new userModel({
            userName,
            email,  
            password: hashedPassword
        })

        await newUser.save(); 

        return res.status(200).json({
            success: true,
            message: "User registered successfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal Server Error"});
        
        
    }
}

module.exports.loginUser = async (req, res) => {
    
    const { email, password } = req.body;

    try {

        const user = await userModel.findOne({ email });

        if(!user) {
            return res.status(400).json({
                success: false,
                message: "User does not exist with this email"
            });
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = jwt.sign({ id: user._id,role:user.role,email:user.email}, "ashish", { expiresIn: '1min' });

        res.cookie("token",token,{httpOnly: true, secure: false}).json({
            success:true,
            message:'logged in successfully',
            user:{
                email: user.email,
                role: user.role,
                _id: user._id
            }
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal Server Error"});
        
        
    }
}

module.exports.logoutUser = async (req, res) => {
    res.clearCookie("token").json({success: true, message: "Logged out successfully"});
}
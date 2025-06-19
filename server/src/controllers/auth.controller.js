
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userModel = require("../models/User");


const registerUser = async (req, res) => {
    
    const { userName, email, password } = req.body;

    try {
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



const login = async (req, res) => {
    
    const { email, password } = req.body;

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal Server Error"});
        
        
    }
}

module.exports = {registerUser}
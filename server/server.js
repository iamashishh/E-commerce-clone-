const express = require("express");
const mongoose  = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authroutes = require("./src/routes/auth/auth.routes");

mongoose.connect("mongodb://localhost:27017/skyflow_Project" ).then(()=>{
    console.log("Connected to MongoDB")
     }).catch( err => { console.log(err);
})

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization","Cache-Control","Expires","Pragma"],
        credentials: true,
    })
)

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authroutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
const express = require("express");
const mongoose  = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authroutes = require("./src/routes/auth/auth.routes");
const adminProductRoutes = require("./src/routes/admin/product.routes");
const shopProductRoutes = require("./src/routes/shop/product.route");
const cartRoutes = require("./src/routes/shop/cart.route");
const addressRoutes = require("./src/routes/shop/address.route");
const orderRoutes = require("./src/routes/shop/order.route");
const adminOrderRoutes = require("./src/routes/admin/order.routes");
const searchProductRoutes = require("./src/routes/shop/search.route");
const reviewProductRoutes = require("./src/routes/shop/review.route");
const featureRoutes = require("./src/routes/admin/feature.route");

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

app.use("/api/admin/products",adminProductRoutes)
app.use("/api/admin/orders",adminOrderRoutes)

app.use("/api/common/feature",featureRoutes)

app.use("/api/shop/products",shopProductRoutes)
app.use("/api/shop/cart",cartRoutes)
app.use("/api/shop/address",addressRoutes)
app.use("/api/shop/order",orderRoutes)
app.use("/api/shop/search",searchProductRoutes)
app.use("/api/shop/review",reviewProductRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
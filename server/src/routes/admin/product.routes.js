const express = require("express");
const router = express.Router();

const { handleImageUplaod, addProducts, editProduct, deleteProduct, fetchAllProducts } = require("../../controllers/admin/products.controller");
const {upload}= require("../../config/cloudinary");

router.post("/upload-image", upload.single("my_file"), handleImageUplaod);

router.post("/add",addProducts);
router.put("/edit/:id",editProduct);
router.delete("/delete/:id",deleteProduct);
router.get("/get",fetchAllProducts);



module.exports = router;
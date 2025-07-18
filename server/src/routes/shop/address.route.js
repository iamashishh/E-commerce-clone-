const { addAddress, fetchAllAddress, deleteAddress, editAddress } = require('../../controllers/shop/adress.controller');

const router = require('express').Router();

router.post("/add", addAddress);
router.get("/get/:userId", fetchAllAddress);
router.delete("/delete/:userId/:addressId", deleteAddress);
router.put("/update/:userId/:addressId", editAddress);



module.exports = router
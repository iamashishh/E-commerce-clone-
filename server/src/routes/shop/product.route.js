const { getFilteredProducts, getProductDetails } = require('../../controllers/shop/product.controller');

const router = require('express').Router();

router.get("/get",getFilteredProducts);
router.get("/get/:id",getProductDetails);
// router.get("/get",getFilteredProducts);


module.exports = router
const { getFilteredProducts } = require('../../controllers/shop/product.controller');

const router = require('express').Router();

router.get("/get",getFilteredProducts);
router.get("/get",getFilteredProducts);
router.get("/get",getFilteredProducts);


module.exports = router
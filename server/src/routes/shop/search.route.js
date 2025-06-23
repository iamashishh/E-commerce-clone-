const { searchProducts } = require('../../controllers/shop/search.controller');

const router = require('express').Router();

router.get("/:keyword",searchProducts);

module.exports = router
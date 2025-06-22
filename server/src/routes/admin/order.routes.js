const { getAllOrdersOfAllUsers, getOrderDetailsForAdmin, updateOrderStatus } = require("../../controllers/admin/order-controller");

const router = require("express").Router();

router.get("/get",getAllOrdersOfAllUsers);
router.get("/details/:id",getOrderDetailsForAdmin);
router.put("/update/:id",updateOrderStatus);



module.exports = router
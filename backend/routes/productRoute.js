const express = require('express');
const protect = require('../middleWare/authMiddleware');
const router = express.Router();
const {addProduct,getProductByserial,getProducts,updateProduct,deleteProduct} =require('../controllers/productController');



router.post("/addProduct",protect,addProduct);
router.get("/getProducts",protect,getProducts);
router.get("/getProduct/:serial",protect,getProductByserial);
router.patch("/updateProduct/:id",protect,updateProduct);
router.delete("/deleteProduct/:id",protect,deleteProduct);


module.exports = router;

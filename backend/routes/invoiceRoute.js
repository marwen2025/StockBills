const express = require('express');
const protect = require('../middleWare/authMiddleware');
const router = express.Router();
const {deleteInvoice,createInvoice,getAllInvoices,getInvoiceById,}=require('../controllers/invoiceController');


router.post("/createInvoice",protect,createInvoice);
router.get("/getInvoices",protect,getAllInvoices);
router.get("/getInvoice/:id",protect,getInvoiceById);
/* router.patch("/updateInvoice/:id",protect,updateInvoice);*/
router.delete("/deleteInvoice/:id",protect,deleteInvoice); 

module.exports = router;

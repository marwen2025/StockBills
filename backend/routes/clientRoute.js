const express = require('express');
const protect = require('../middleWare/authMiddleware');
const router = express.Router();
const {addClient,getClients,getClientBymatricule,updateClient,deleteClient}=require('../controllers/clientController');


router.post("/addClient",protect,addClient);
router.get("/getClients",protect,getClients);
router.get("/getClient/:matricule",protect,getClientBymatricule);
router.patch("/updateClient/:id",protect,updateClient);
router.delete("/deleteClient/:id",protect,deleteClient);

module.exports = router;

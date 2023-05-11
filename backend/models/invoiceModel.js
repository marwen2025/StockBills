const mongoose = require('mongoose');
const LineItem= require('./lineItemModel');
const User = require('../models/userModel');

const InvoiceSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  clientId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Client",
  },
  total: {
    type: Number,
    required: true,
  },
  lineList: {
    type: [mongoose.model('LineItem').schema],
    required: true,
  },
 
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});                                                                       

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice;
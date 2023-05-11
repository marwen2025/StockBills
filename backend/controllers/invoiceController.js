/* const Invoice = require('../models/invoiceModel');
const LineItem = require('../models/lineItemModel');

// Get all invoices
const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find()
      
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one invoice
const getInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id)
      
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create an invoice
const createInvoice = async (req, res) => {
  const {  clientId, lineList } = req.body;
  const userId=req.user._id
  
  try {
    ///wsolt lennnnnnna 
    const totalHT=500;
    const totalTTC=500;
    const newLineList = await Promise.all(
      lineList.map(async (lineItem) => {
        const { productId, quantity, unitPrice } = lineItem;
        const product = await Product.findById(productId);
        if (!product) {
          throw new Error('Product not found');
        }
        return {
          productId: product._id,
          quantity: quantity,
          unitPrice: unitPrice,
        };

      })
    );
    
    const invoice = new Invoice({
      userId,
      clientId,
      totalHT: totalHT,
      totalTTC:totalTTC,
      lineList: newLineList,
    });
    const newInvoice = await invoice.save();
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an invoice
const updateInvoice = async (req, res) => {
  const { userId, clientId, totalHT, totalTTC, lineList } = req.body;
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    invoice.userId = userId;
    invoice.clientId = clientId;
    invoice.totalHT = totalHT;
    invoice.totalTTC = totalTTC;
    invoice.lineList = await Promise.all(
      lineList.map(async (lineItem) => {
        const { productId, quantity, unitPrice } = lineItem;
        const product = await Product.findById(productId);
        if (!product) {
          throw new Error('Product not found');
        }
        return {
          productId: product._id,
          quantity,
          unitPrice,
        };
      })
    );
    const updatedInvoice = await invoice.save();
    res.status(200).json(updatedInvoice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


//delete invoice
const deleteInvoice = async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  if (!invoice) {
    res.status(404);
    throw new Error('Invoice not found');
}
  await invoice.remove();
  res.json({ message: true });

};

module.exports ={
    getAllInvoices,
    getInvoice,
    updateInvoice,
    createInvoice,
    deleteInvoice
    
} */


const Invoice = require('../models/invoiceModel');
const User = require('../models/userModel');
const LineItem = require('../models/lineItemModel');
const asyncHandler = require('express-async-handler');
const Client = require('../models/clientModel');
const Product = require('../models/productModel');

// Create an invoice
const createInvoice = asyncHandler(async (req, res) => {
  const { clientId, lineItems } = req.body;
  const user = await User.findById(req.user._id);

  // Check if client exists
  const clientExists = await Client.findById(clientId);
  if (!clientExists) {
    res.status(400);
    throw new Error('Invalid client');
  }

  // Calculate total price
  let totalPrice = 0;
  let lineItemList = [];
  for (let item of lineItems) {
    console.log(item);
    const product = await Product.findById(item.productId);
    if (!product) {
      res.status(400);
      throw new Error(`Invalid product: ${item.productId}`);
    }
    if (product.quantity < item.quantity) {
      res.status(400);
      throw new Error(`Not enough quantity of product: ${product.name}`);
    }
    totalPrice += product.price * item.quantity;
    console.log(totalPrice);
    const lineItem = await LineItem.create({
      productId: product._id,
      quantity: item.quantity,
      name: product.name,
      unitPrice: product.price,
    });
    lineItemList.push(lineItem);

    // Update product quantity
    product.quantity -= item.quantity;
    await product.save();
  }

  // Create new invoice
  const invoice = new Invoice({
    userId: user._id,
    clientId: clientId,
    total: totalPrice,
    lineList: lineItemList,
  });

  await invoice.save();
  res.status(201).json(invoice);
});


// Get all invoices
const getAllInvoices = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const invoices = await Invoice.find({ userId: user._id });
  res.json(invoices);
});

// Get single invoice by id
const getInvoiceById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const invoice = await Invoice.findOne({
    _id: req.params.id,
    userId: user._id,
  }).populate([
    { path: 'clientId', select: '-password' },
    { path: 'lineList',select:'-password'  },
    {path: 'userId', select: 'name'},
    {path:'lineList',select:'-password'}
  ]);
  if (!invoice) {
    res.status(404);
    throw new Error('Invoice not found');
  }
  res.json(invoice);
});
//delete invoice
const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
      res.status(404);
      throw new Error('Invoice not found');
  }

  if (invoice.userId.toString() !== req.user._id.toString()) {
      res.status(401);
      throw new Error('Unauthorized access');
  }

  await invoice.remove();
  res.json({ message: 'Invoice removed' });
});

module.exports = {deleteInvoice, createInvoice, getAllInvoices, getInvoiceById };

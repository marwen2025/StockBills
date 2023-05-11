const User = require('../models/userModel');
const Product = require('../models/productModel');
const asynchandler = require('express-async-handler');

// Add product
const addProduct = asynchandler(async (req, res) => {
    const { serial, name, quantity, price } = req.body;
    // Validate product
    if (!serial || !name || !quantity || !price) {
        res.status(400);
        throw new Error('Please fill all required fields');
    }// Get user ID
    const user = await User.findById(req.user._id);
    // Check if product exists
    const productExist = await Product.findOne({ serial: serial,userId:user._id });
    if (productExist) {
        res.status(400);
        throw new Error('Product already exists');
    }
    
    // Create new product
    const product = await Product.create({ userId: user._id, serial, name, quantity, price });
    res.status(201).json(product);
});

// Get all products
const getProducts = asynchandler(async (req, res) => {
    const products = await Product.find({ userId: req.user._id });
    res.status(200).json(products);
});

// Get single product
const getProductByserial = asynchandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.serial, userId: req.user._id });
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});

// Update product
const updateProduct = asynchandler(async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id, userId: req.user._id });
    if (product) {
        const {serial,name,quantity,price}=product;

        product.serial = req.body.serial || serial;
        product.name =  req.body.name || name;
        product.quantity = req.body.quantity || quantity;
        product.price = req.body.price || price;
        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } else {
        res.status(404);
        throw new Error('Product not found');
    }
});
const deleteProduct = asynchandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    if (product.userId.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error('Unauthorized access');
    }

    await product.remove();
    res.json({ message: 'Product removed' });
});

module.exports = {
    addProduct,
    getProductByserial,
    getProducts,
    updateProduct,
    deleteProduct
}
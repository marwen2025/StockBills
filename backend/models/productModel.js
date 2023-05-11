const mongoose = require('mongoose');

const ProductSchema= mongoose.Schema({
 userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user"
 },
 serial:{
   type: String,
   required: true,
},
 name:{
    type: String,
    required: true,
 },
 price:{
    type: Number,
    required: true,
 },
 quantity:{
    type: Number,
    required: true,
 },
 createdAt:{
    type: Date,
    required: true,
    default:Date.now(),
 },
})
const Product = mongoose.model("Product",ProductSchema)

module.exports = Product;
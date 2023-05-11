const mongoose = require('mongoose');


const LineItemSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    name:{
        type:String,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
})
const LineItem = mongoose.model("LineItem", LineItemSchema)

module.exports = LineItem;
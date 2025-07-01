const mongoose = require('mongoose');

const ordermodel = new mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId, ref: 'product', required: "true"
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }],
}, { timestamps: true })

module.exports = mongoose.model('order', ordermodel);
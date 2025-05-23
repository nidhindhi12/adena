const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    
    title: {
        type: String
    },
    price:
    {
        type: Number,
        required: true,
    },
    description:
    {
        type: String,
    },
    gender:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'gender',
        required: true,
    },
    metal:
    {
         type: mongoose.Schema.Types.ObjectId,
        ref:'metal',
        required: true,
    },
    ocassion:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'ocassion',
        required: true,
    },
    discount:
    {
        type: Number,
        require: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    image:
        [
            {
                url: String,
                public_id: String
            }
        ]
});

module.exports = mongoose.model('product', productSchema)
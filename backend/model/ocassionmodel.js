const mongoose = require('mongoose');

const ocassionmodel = new mongoose.Schema({
    ocassionname: {
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("ocassion", ocassionmodel);
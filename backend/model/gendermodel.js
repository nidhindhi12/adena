const mongoose = require('mongoose');


const gendermodel = new mongoose.Schema({
    gendername: {
        type: String,
        required: true,
    }
}, { timestamps: true })

module.exports = mongoose.model("gender", gendermodel);
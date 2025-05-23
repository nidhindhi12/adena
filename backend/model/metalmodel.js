const mongoose= require('mongoose');

const metalmodel= new mongoose.Schema({
    metalname:{
        type:"String",
        required:true
    }
},{timestamps:true})


module.exports= mongoose.model("metal",metalmodel);
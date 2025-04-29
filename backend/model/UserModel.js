const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        
    },
    phonenumber:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
    }
})

module.exports= mongoose.model('users',userSchema);
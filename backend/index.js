const express = require('express');
const cors= require('cors');
const connection = require('./utils/connectdb')
const userroutes =require('./routes/userroutes')

const app= express();

app.use(express.json());
app.use(cors());
const port=5000;
app.use('/api',userroutes);


const startServer= async()=>{
    try {
        await connection();
        app.listen(port,()=>{
            console.log(`Server started successfully on port ${port}`);
        })
    } catch (error) {
        console.log('Server failed to start',error);
        
    }
}

startServer();

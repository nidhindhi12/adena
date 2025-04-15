const express = require('express');
const cors= require('cors');

const app= express();

app.use(express.json());
app.use(cors());
const port=5000;

const startServer= async()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server started successfully on port ${port}`);
        })
    } catch (error) {
        console.log('Server failed to start',error);
        
    }
}

startServer();

const productmodel = require('../model/Productmodel');
const cloudinary = require('../utils/cloudinary.config');
const categorymodel = require('../model/categorymodel');
const gendermodel =require('../model/gendermodel');
const metalmodel= require('../model/metalmodel');
const ocassionmodel= require('../model/ocassionmodel');
const fs = require('fs');
const mongoose = require('mongoose');

const addproduct = async (req, res) => {
    try {
        const data = req.body;
        console.log('Received data:', data);

        if (!data) {
            return res.status(400).json({ status: false, data: { message: "Data is null" } });
        }
        const procat = await categorymodel.findById(data.category);
        if (!procat) {
            return res.status(400).json({ status: false, data: { message: "Category not found" } });
        }
        
        const progender = await gendermodel.findById(data.gender);
        console.log(progender);
        if (!progender) {
            return res.status(400).json({ status: false, data: { message: "Gender not found" } });
        }
        
        const prometal = await metalmodel.findById(data.metal)
        if (!prometal) {
            return res.status(400).json({ status: false, data: { message: "Metalnot found" } });
        }
        const proocassion = await ocassionmodel.findById(data.ocassion);
        if (!proocassion) {
            return res.status(400).json({ status: false, data: { message: 'ocassion not found' } });
        }


        const uploadimages = req.files.map((file) => ({
            url: file.path,           // This is the Cloudinary URL if using CloudinaryStorage
            public_id: file.filename  // This is the Cloudinary public_id if using CloudinaryStorage
        }));

        const newProduct = new productmodel({
            productid: data.productid,
            title: data.title,
            price: data.price,
            description: data.description,
            gender: progender._id,
            metal: prometal._id,
            ocassion:proocassion._id,   // make sure this spelling matches your schema!
            discount:data.discount,
            size:data.size,
            karatage:data.karatage,
            category: procat._id,
            image: uploadimages
        });

        await newProduct.save();

        return res.status(200).json({
            status: true,
            data: { message: "Product added successfully", product: newProduct }
        });

    } catch (error) {
        console.error('Error adding product:', error);
        return res.status(500).json({
            status: false,
            data: { message: 'Internal server error', error: error.message }
        });
    }
};

module.exports = { addproduct };

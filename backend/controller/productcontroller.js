const productmodel = require('../model/Productmodel');
const cloudinary = require('../utils/cloudinary.config')
const categorymodel = require('../model/categorymodel')
const fs = require('fs');

const addproduct = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        if (!data) {
            return res.status(400).json({ status: false, data: { message: "Data is null" } });
        }
        
        const procat = await categorymodel.findById(data.category);
        
        if (!procat) return res.status(400).json({ status: false, data: { message: "category not found" } });
        
        const uploadimages = [];
        for (let file of req.files) {
            const result = await cloudinary.uploader.upload(file.path, {
                folder: data.folder,
            })
            fs.unlinkSync(file.path);
            uploadimages.push({
                url: result.url,
                public_id: result.public_id
            })
        }



        const newProduct = new productmodel({
            productid: data.productid,
            title: data.title,
            price: data.price,
            description: data.description,
            gender: data.gender,
            metal: data.metal,
            occasion: data.occasion,
            discount: 0,
            category: procat._id,
            image: uploadimages
        })
        await newProduct.save();
        return res.status(200).json({ status: true, data: { message: "Product add successfully", data: newProduct } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });
    }

}

module.exports = { addproduct }
const categorymodel = require("../model/categorymodel");


const addcategory = async (req, res) => {
    try {
        const catedata = req.body;
        console.log(catedata);
        if (!catedata) {
            return res.status(400).json({ status: false, data: { message: " Category Data is null" } });
        }
        const dbcat = categorymodel({
            categoryname: catedata.categoryname
        })
        dbcat.save();
        return res.status(200).json({ status: true, data: { message: "Product catgory add successfully", data: dbcat } });

    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });
    }
}

const readcategory = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

}

module.exports = { addcategory }
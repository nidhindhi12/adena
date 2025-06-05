
const metalmodel = require('../model/metalmodel')

const addmetal = async (req, res) => {
    try {
        const metaldata = req.body;

        if (!metaldata) {
            return res.status(400).json({ status: false, data: { message: " metal data is null" } });
        }

        const dbmetal = metalmodel({
            metalname: metaldata.metalname
        });
        dbmetal.save();
        return res.status(200).json({ status: true, data: { message: "metal add successfully", data: dbmetal } });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });
    }
}
const readmetaldata = async (req, res) => {
    try {
        const metaldata= await metalmodel.find();
        return res.status(200).json({ status: true, data: { message: "product read successfully", data: metaldata } });
        
    } catch (error) {
          return res.status(500).json({ status: false, data: { message: 'Internal server error.' }, data: error });
    }
}

module.exports = { addmetal,readmetaldata };
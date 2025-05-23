const metalmodel = require('../model/metalmodel')

const addmetal = async (req, res) => {
    try {
        const metaldata = req.body;
        console.log(metaldata);
        if (!metaldata) {
            return res.status(400).json({ status: false, data: { message: " metal data is null" } });
        }

        const dbmetal = metalmodel({
            metalname: metaldata.metalname
        });
        dbmetal.save();
        return res.status(200).json({ status: true, data: { message: "Product catgory add successfully", data: dbmetal } });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });
    }
}

module.exports = { addmetal };
const ocasssionmodel = require('../model/ocassionmodel')

const addocasssion = async (req, res) => {
    try {
        const ocasssiondata = req.body;
        console.log(ocasssiondata);
        if (!ocasssiondata) {
            return res.status(400).json({ status: false, data: { message: " ocasssion Data is null" } });
        }

        const dbocasssion = ocasssionmodel({
            ocassionname:ocasssiondata.ocassionname
        })
        dbocasssion.save();
        return res.status(200).json({ status: true, data: { message: "Product catgory add successfully", data: dbocasssion } });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });
    }
}

module.exports = { addocasssion };
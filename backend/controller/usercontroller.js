const usermodel = require('../model/UserModel');
const bcrypt = require('bcryptjs')
const sentmail = require('../utils/Nodemailer');
const { JWT_SECRET } = require('../utils/config')
const Jwt = require('jsonwebtoken');


//#region add user
const adduser = async (req, res) => {
    try {
        const user = req.body;
        if (!user) {
            return res.status(400).json({ status: false, data: { message: 'user is null' } });
        }
        const hashpassword = bcrypt.hashSync(user.password, 10);
        const dbuser = new usermodel({
            firstname: user.firstname, lastname: user.lastname, email: user.email, phonenumber: user.phonenumber, password: hashpassword, usertype: user.usertype,
            // image: imageData
        })
        await dbuser.save();
        const existuser = await usermodel.findOne({ phonenumber: user.phonenumber });
        if (!existuser) {
            return res.status(400).json({ status: false, data: { message: 'User doesnt exists' } });
        }
        const sub = "Welcome to our App";
        const text = `Hii! ${user.firstname} ${user.lastname} thanks for signing up !!`;
        const html = `<h2> 🎉 Welcome abroad 🎉</h2>
                    <p>Thanks for signing up! We're excited to have you with us. Keep an eye on your inbox — we’ll be sending you updates, tips, and more good stuff soon.
                    If you have any questions, feel free to reach out anytime!</p>`

        const mailsent = await sentmail(user.email, sub, text, html)
        if (!mailsent) {
            return res.status(400).json({ status: false, data: { message: 'email not sent' } });
        }
        return res.status(200).json({ status: true, data: { message: 'user data successfully.', data: dbuser } });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });

    }

}
//#endregion

//#region  loginuser
const loginuser = async (req, res) => {
    try {
        const userdetail = req.body;
        if (!userdetail)
            return res.status(400).json({ status: false, date: { message: 'Fields are empty' } });
        const dbuser = await usermodel.findOne({ email: userdetail.email });
        if (!dbuser) {
            return res.status(400).json({ status: false, data: { message: 'Email not found' } });
        }
        const checkpass = await bcrypt.compare(userdetail.password, dbuser.password)
        if (!checkpass) {
            return res.status(400).json({ status: false, data: { message: 'Invalid Password' } })
        }
        const token = Jwt.sign({ _id: dbuser._id }, JWT_SECRET);
        return res.status(200).json({ status: true, data: { message: 'Login successfully.', data: dbuser, token: token } })
    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'internal server error.', data: error } })
    }
}
// middleware
const AuthVerify = async (req, res) => {
    return res.status(200).json({ status: true, data: { message: 'Authentication verified', data: req.user } })
}

const readalluser = async (req, res) => {
    try {
        const userdata = await usermodel.find();
        if (!userdata) {
            return res.status(400).json({ status: false, data: { message: 'user data is null' } });
        }
        return res.status(200).json({ status: true, data: { message: "category read successfully", data: userdata } })
    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'Internal server error.' }, data: error });
    }
}
const updateuser = async (req, res) => {
    try {
        const userid = req.params.id;
        console.log(userid);
        if (!userid) {
            return res.status(400).json({ status: false, data: { message: 'user data is null' } });
        }
        const user = req.body;
        const dbuser = await usermodel.updateOne({ _id: userid }, {
            firstname: user.firstname, lastname: user.lastname, email: user.email, phonenumber: user.phonenumber, usertype: user.usertype, streetaddress: user.streetaddress,
            town: user.town, state: user.state, country: user.country, pincode: user.pincode
        })
        return res.status(200).json({ status: true, data: { message: 'User updated successfully', data: dbuser } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, data: { message: 'Internal server error.' }, data: error });
    }

}
module.exports = { adduser, loginuser, AuthVerify, readalluser, updateuser };



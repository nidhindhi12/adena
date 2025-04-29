const usermodel = require('../model/UserModel');
const bcrypt = require('bcryptjs')
const { decrypt } = require('dotenv')
const sentmail = require('../utils/Nodemailer');

//#region  add new new user
const adduser = async (req, res) => {
    try {
        const user = req.body;
        if (!user) {
            return res.status(400).json({ status: false, data: { message: 'user is null' } });
        }
        const hashpassword = bcrypt.hashSync(user.password, 10);
        const dbuser = new usermodel({
            firstname: user.firstname, lastname: user.lastname, email: user.email, phonenumber: user.phonenumber, password: hashpassword
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
        console.log(user.email);
        const mailsent = await sentmail(user.email, sub, text, html)    
        if (!mailsent) {
            return res.status(400).json({ status: false, data: { message: 'email not sent' } });
        }
        return res.status(200).json({ status: true, data: { message: 'user data successfully.', data: dbuser } });
    } catch (error) {
        return res.status(500).json({ status: false, data: { message: 'Internal server error', data: error } });

    }

}
module.exports = { adduser };
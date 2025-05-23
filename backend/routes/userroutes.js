const express = require('express');
const router = express.Router();
const { adduser, loginuser, AuthVerify } = require('../controller/usercontroller')
const upload = require('../utils/upload')
const Auth = require('../middleware/authverify')



router.post('/', adduser);
router.post('/loginuser', loginuser)
router.post('/authverify', Auth, AuthVerify)


module.exports = router;


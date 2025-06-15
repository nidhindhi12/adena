const express = require('express');
const router = express.Router();
const { adduser, loginuser, AuthVerify, readalluser } = require('../controller/usercontroller')
const upload = require('../utils/userupload')
const Auth = require('../middleware/authverify')



router.post('/', upload.single('image'), adduser);
router.post('/loginuser', loginuser)
router.post('/authverify', Auth, AuthVerify)
router.get('/readalluser', readalluser)


module.exports = router;


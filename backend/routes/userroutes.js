const express = require('express');
const router = express.Router();

const { adduser } = require('../controller/usercontroller')

router.post('/', adduser)

module.exports = router;


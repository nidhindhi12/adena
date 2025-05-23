const express = require('express');
const { addgender } = require('../controller/gendercontroller');
const router = express.Router();


router.post('/addgender', addgender);

module.exports = router;
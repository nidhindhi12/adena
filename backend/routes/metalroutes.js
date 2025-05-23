const express = require('express');
const { addmetal } = require('../controller/metalcontroller');
const router = express.Router();


router.post('/addmetal', addmetal);

module.exports = router;
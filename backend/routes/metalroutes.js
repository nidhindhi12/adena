const express = require('express');
const { addmetal, readmetaldata } = require('../controller/metalcontroller');
const router = express.Router();


router.post('/addmetal', addmetal);
router.get('/readmetaldata',readmetaldata)

module.exports = router;
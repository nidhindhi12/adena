const express = require('express');
const router = express.Router();
const { addocasssion } = require('../controller/ocassioncontroller');


router.post('/addocassion', addocasssion);

module.exports = router;
const express = require('express');
const router = express.Router();
const { addocasssion, readocassiondata } = require('../controller/ocassioncontroller');


router.post('/addocassion', addocasssion);
router.get('/readocassiondata',readocassiondata)

module.exports = router;
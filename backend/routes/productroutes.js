const express = require('express');
const router = express.Router();
const upload = require('../utils/upload')
const { addproduct } = require('../controller/productcontroller');


router.post('/addproduct',upload.array('image'), addproduct);



module.exports = router;
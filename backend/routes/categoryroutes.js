const express = require('express');
const router = express.Router();
const { addcategory } = require('../controller/categorycontroller');

router.post('/addcategoryproduct', addcategory);

module.exports = router;
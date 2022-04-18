const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

const customerController = require('../controllers/customerController')

router.get('/', customerController.list);

module.exports = router;
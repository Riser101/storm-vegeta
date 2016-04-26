var express = require('express');
var router = express.Router();
var api = require('./api/api');


router.post('/', api.addUser);

router.get('/get', api.getProducts); 

module.exports = router;
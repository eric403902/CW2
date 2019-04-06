var express = require('express');
var router = express.Router();
var controllerindex = require('../controllers/index');

/* GET home page. */
router.get('/', controllerindex.display);


module.exports = router;

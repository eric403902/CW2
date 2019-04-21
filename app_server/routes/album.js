var express = require('express');
var router = express.Router();
var controlleralbum = require('../controllers/edit');

/* GET home page. */
router.get('/', controlleralbum.display);


module.exports = router;

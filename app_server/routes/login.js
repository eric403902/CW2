var express = require('express');
var router = express.Router();
var controllerlogin = require('../controllers/login');
/* GET home page. */
router.get('/', controllerlogin.display );
router.post('/validate' , controllerlogin.valid);

module.exports = router;


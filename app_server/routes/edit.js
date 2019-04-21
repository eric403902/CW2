var express = require('express');
var router = express.Router();
var controlleredit = require('../controllers/edit');

/* GET home page. */
router.get('/', controlleredit.display);


module.exports = router;

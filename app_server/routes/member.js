var express = require('express');
var router = express.Router();
var controllermember = require('../controllers/member');

/* GET home page. */
router.get('/', controllermember.display);

router.get('/buy', controllermember.buy);
router.get('/refund', controllermember.refund);
module.exports = router;

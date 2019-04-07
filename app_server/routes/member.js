var express = require('express');
var router = express.Router();
var controllermember = require('../controllers/member');

/* GET home page. */
router.get('/', controllermember.display);

router.post('/buy', controllermember.buy);
router.put('/refund', controllermember.refund);
module.exports = router;

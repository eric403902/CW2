var express = require('express');
var router = express.Router();
var controllerstaff = require('../controllers/staff');

/* GET home page. */
router.get('/', controllerstaff.display);
router.put('/change', controllerstaff.change);
router.delete('/del', controllerstaff.delete);
router.post('/creat', controllerstaff.creat);

module.exports = router;

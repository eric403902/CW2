var express = require('express');
var router = express.Router();
var controllerstaff = require('../controllers/staff');

/* GET home page. */
router.get('/', controllerstaff.display);
router.get('/change', controllerstaff.change);
router.get('/delete/:dsong', controllerstaff.delete);
router.get('/creat', controllerstaff.creat);

module.exports = router;

var express = require('express');
var router = express.Router();
var controlleralbum = require('../controllers/album');

/* GET home page. */
router.get('/:id', controlleralbum.display);
router.get('/edit/:id', controlleralbum.edit);
router.put('/edit/:id', controlleralbum.edit);
router.delete('/delete', controlleralbum.delete);
router.post('/create', controlleralbum.create);
router.get('/create', controlleralbum.create);


module.exports = router;

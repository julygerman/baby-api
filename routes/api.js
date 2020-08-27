var express = require('express');
var router = express.Router();
const babiesCtrl = require('../controllers/api/babies')

router.get('/babies', babiesCtrl.index)
router.get('/babies/:id', babiesCtrl.show)
router.post('/babies', babiesCtrl.create)
router.delete('/babies/:id', babiesCtrl.delete)
router.put('/babies/:id', babiesCtrl.update)

module.exports = router;

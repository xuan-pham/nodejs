const router = require('express').Router();
const UserController = require('../controllers/UserController');
//
router.get('/user', UserController.index);
router.post('/user/store', UserController.store);
//
module.exports = router;
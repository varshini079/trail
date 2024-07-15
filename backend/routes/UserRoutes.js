const express = require('express');
const userController = require('../Controllers/UserController');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users/:uid', userController.getUser);
router.put('/users/:uid', userController.updateUser);


module.exports = router;

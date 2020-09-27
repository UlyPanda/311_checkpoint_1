const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();

router.get('/users', usersController.listUsers);

router.get('/users/:id', usersController.showUser);

router.post('/users/', usersController.createUser);

router.put('/users/:id', usersController.updateUser);

router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
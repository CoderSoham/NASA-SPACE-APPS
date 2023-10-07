const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const admin = require('firebase-admin');

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.get('/:userId', usersController.getUserProfile);

module.exports = router;

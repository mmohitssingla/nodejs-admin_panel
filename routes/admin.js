const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.get('/', authController.index);
router.get('/dashboard', authController.dashboard);
router.post('/login', authController.login);

exports.routes = router;
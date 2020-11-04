const authControllers = require('../controllers/Auth');
const express = require('express');
const router = express.Router();

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);


module.exports = router;
const express = require('express');
const { signup, login } = require('../controllers/loginController');
const router = express.Router();

//Nuestras Rutas
router.post('/signup', signup);
router.post('/login', login);


module.exports = router;
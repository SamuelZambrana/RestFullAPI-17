const express = require('express');
const router = express.Router();
const {getAllUser, getUserById, getUserByName, addUser } = require('../controllers/userController');

router.get('/', getAllUser);
router.get('/:idUser', getUserById);
router.get('/name/:name', getUserByName);
router.post('/', addUser)

module.exports = router;

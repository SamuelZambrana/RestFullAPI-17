const express = require('express');
const router = express.Router();
const {getAllUser, getUserById, getUserByName, addUser, getUserAge } = require('../controllers/userController');

router.get('/', getAllUser);
router.get('/:idUser', getUserById);
router.get('/searchName/:name', getUserByName);
router.post('/', addUser)
router.get('/searchAge/:edad', getUserAge)


module.exports = router;

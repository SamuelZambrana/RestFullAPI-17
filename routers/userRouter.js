const express = require('express');
const router = express.Router();
const {
    getAllUser, 
    getUserById, 
    getUserByName, 
    addUser, 
    deletedUser,
    replaceUser,
    updateUser
} = require('../controllers/userController');

router.get('/', getAllUser);
router.get('/:idUser', getUserById);
router.get('/searchName/:name', getUserByName);
router.post('/', addUser)
router.put('/:idUser', replaceUser)
router.patch('/:idUser', updateUser)
router.delete('/:idUser', deletedUser)

module.exports = router;

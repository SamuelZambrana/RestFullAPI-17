const express = require('express');
const router = express.Router();
const {
    getAllUser, 
    getUserById, 
    getUserByName, 
    addUser, 
    deletedUser,
    replaceUser,
    updateUser,
    addFavouriteMovie,
    deletedFavouriteMovie
} = require('../controllers/userController');

router.get('/', getAllUser);
router.get('/:idUser', getUserById);
router.get('/searchName/:name', getUserByName);
router.post('/', addUser)
router.put('/:idUser', replaceUser)
router.patch('/:idUser', updateUser)
router.delete('/:idUser', deletedUser)
router.patch('/:idUser/favourites/:idMovie', addFavouriteMovie)
router.patch('/:idUser/removeFavourites/:idMovie', deletedFavouriteMovie)
module.exports = router;

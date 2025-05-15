const express = require('express');
const router = express.Router();
const {
    getAllUser, 
    getUserByName, 
    deletedUser,
    replaceUser,
    updateUser,
    addFavouriteMovie,
    deletedFavouriteMovie,
    getMyProfile
} = require('../controllers/userController');
const verifyToken = require('../middlewares/auth');

router.get('/', getAllUser);
router.get('/myProfile', verifyToken, getMyProfile);
router.get('/searchName/:name', getUserByName);
router.put('/:idUser', replaceUser)
router.patch('/:idUser', updateUser)
router.delete('/:idUser', deletedUser)
router.patch('/:idUser/favourites/:idMovie', addFavouriteMovie)
router.patch('/:idUser/removeFavourites/:idMovie', deletedFavouriteMovie)
module.exports = router;

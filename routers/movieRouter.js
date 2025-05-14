const express = require('express');
const router = express.Router();


const {
    addMovie,
    getAllMovie,
    getMovieById,
    getMovieByTitle

} = require('../controllers/movieController');


router.post('/', addMovie)
router.get('/', getAllMovie);
router.get('/:idMovie', getMovieById)
router.get('/searchMovie/:title', getMovieByTitle)

module.exports = router;
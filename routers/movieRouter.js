const express = require('express');
const router = express.Router();


const {
    addMovie,
    getAllMovie

} = require('../controllers/movieController');


router.post('/', addMovie)
router.get('/', getAllMovie);

module.exports = router;
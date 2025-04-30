const express = require('express');
const router = express.Router();
const {getAllUser, getUserById } = require('../controllers/userController');

router.get('/', getAllUser);
router.get('/:id', getUserById);

module.exports = router;

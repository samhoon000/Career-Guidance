const express = require('express');
const router = express.Router();
const { loginMentor } = require('../controllers/mentorController');

router.post('/login', loginMentor);

module.exports = router;
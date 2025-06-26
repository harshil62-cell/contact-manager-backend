const express = require('express');
const { loginUser, registerUser, currentUser } = require('../controllers/userController');
const router = express.Router();
const validateToken = require('../middleware/validateTokenHandler');


router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', validateToken, currentUser);

module.exports = router;

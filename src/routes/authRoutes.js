const express = require('express');
const router = express.Router();
const { registerUser,
    loginUser,
    setupMpin,
    getUserProfile
} = require('../controllers/authController');

const { protect } = require('../middleware/protect'); //require middlewares


//test route
router.get('/', (req, res) => {
    res.send('Auth route working');
});

//register route
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/set-mpin', protect, setupMpin);
router.get('/profile', protect, getUserProfile);


module.exports = router
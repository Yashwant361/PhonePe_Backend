const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/protect');
const { addMoney, payBill } = require('../controllers/walletController');

router.post('/addMoney',protect,addMoney)
router.post('/payBill',protect,payBill)

module.exports = router
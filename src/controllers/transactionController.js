const Transaction = require('../models/Transaction');
const User = require('../models/User');
const bcrypt = require('bcryptjs');



//@desc send money from one user to another
//@route POST /api/transcation/send
//@access private

const sendMoney = async (req, res) => {
    try {
        const { phone, amount, mpin } = req.body;
        // const sender = req.user._id;
        const senderId = req.user._id;

        if (!mpin) {
            return res.status(400).json({ message: 'MPIN is required' });
        }
        if (amount <= 0) {
            return res.status(400).json({ message: 'Amount is required' });
        }

        //find Sender
        const sender = await User.findById(senderId);
        if (!sender) {
            return res.status(404).json({ message: 'Sender not found' })
        }

        //verify MPIN here
        const isMpinMatch = await bcrypt.compare(mpin, sender.mpin);
        if (!isMpinMatch) {
            return res.status(401).json({ message: 'Invalid MPIN' })
        }

        const receiver = await user.findOne({ phone });
        if (!receiver) {
            return res.status(404).json({ message: 'Receiver not found' })
        }

        // Prevent self transfer
        if (receiver._id.toString() === req.user._id.toString()) {
            return res.status(400).json({
                message: 'You cannot send money to yourself'
            })
        }

        //check insufficient balance
        if (sender.balance < amount) {
            return res.json(400).json({
                message: 'Insufficient balance'
            });
        }

        //transcation logic here
        sender.balance -= amount;
        receiver.balance += amount;

        await sender.save();
        await receiver.save();

        //logs the transcation
        const transaction = await Transaction.create({
            sender: senderId,
            receiver: receiver._id,
            type: 'TRANSFER',
            amount,
            status: 'SUCCESS'
        })

        return res.status(201).json({
            message: "Money Transfer Successful",
            transaction,
            newBalance: sender.balance
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getTransactionHistory = async (req, res) => {


}

module.exports = { sendMoney, getTransactionHistory }
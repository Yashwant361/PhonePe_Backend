

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//function to generate Jwt Token
const generateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );
};

const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        //validation
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // check existing user
        const userExists = await User.findOne({ $or: [{ email }, { phone }] });
        if (userExists) {
            return res.status(400).json({ message: 'User with this email or phone already exists' });
        }

        // hashed Password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create upiID
        const upiId = `${email.split('@')[0]}@phonepe`;

        // create new User
        const user = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            upiId
        });

        // send response 
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                upiId: user.upiId,
                balance: user.balance,
                hasMpinSet: false,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }

    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, phone, password } = req.body;

        if ((!email && !phone) || !password) {
            return res.status(400).json({
                message: "Enter email or phone with password"
            });
        }

        const user = await User.findOne({
            $or: [{ email }, { phone }]
        });

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                upiId: user.upiId,
                balance: user.balance,
                hasMpinSet: !!user.mpin,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const setupMpin = async (req, res) => {
    try {
        const { mpin } = req.body;
        if (!mpin || mpin.length !== 4) {
            return res.status(400).json({ message: 'Please provide a valid 4-digit MPIN' })
        }
        const salt = await bcrypt.genSalt(10);
        const hashedMpin = await bcrypt.hash(mpin, salt);

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { mpin: hashedMpin },
            { new: true })
        if (user) {
            res.json({ message: 'MPIN set Succesfully' });
        } else {
            res.status(400).json({ message: 'Failed to set MPIN' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password -mpin');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    registerUser,
    loginUser,
    setupMpin,
    getUserProfile
};
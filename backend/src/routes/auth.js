
import express from 'express';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import upload from '../middleware/upload.js';

const router = express.Router();

// Register

router.post('/register', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { name, policyNo, category, email, password } = req.body;
    const profilePhoto = req.file ? req.file.path : null;

    if (!name || !policyNo || !category || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use.' });
    }
  

    const hashedPassword = await bycrypt.hash(password, 10);
    const newUser = new User({
      name,
      policyNo,
      category,
      email,
      password: hashedPassword,
      profilePhoto,
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { policyNo, password } = req.body;
    if (!policyNo || !password) {
      return res.status(400).json({ message: 'Policy number and password are required.' });


    }
    const user = await User.findOne({ policyNo });
    if (!user) {
      return res.status(400).json({ message: 'Policy Number and Password is required!' });
    }

    const isMatch = await bycrypt.compare(password, user.password);
    if (isMatch) {
      return res.status(400).json({ message: 'Login succesful' });
    }
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email, category: user.category } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error.' });
  }
});

export default router;
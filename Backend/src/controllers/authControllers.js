import User from '../models/user.models.js';
import jwt from 'jsonwebtoken';


const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password });

    const token = generateToken(user._id);
    res.status(201).json({ message: "Account created", token, userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = generateToken(user._id);
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

import express from "express";
import User from "../Models/Users.js";

const router = express.Router();

// Create a new user
router.post('/create', async (req, res) => {
    const data = req.body;
    try {
        const newUser = new User(data);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Update user by ID
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).json({ error: 'User not found' });
        }
        res.sendStatus(204);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
});


export default router;
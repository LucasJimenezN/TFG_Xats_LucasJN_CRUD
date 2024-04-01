const express = require('express');
const userSchema = require('../models/userSchema');

const router = express.Router();

// Crear User
router.post('/users', (req, res) => {
    const user = new userSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});


// Get todos los Users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Get specific User by id
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Update User by id
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, hashed_password } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {username, email, hashed_password} })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Delete User by id
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router;
const express = require('express');
const messagesSchema = require('../models/messagesSchema');

const router = express.Router();

// Crear Message
router.post('/messages', (req, res) => {
    const message = new messagesSchema(req.body);
    message
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});


// Get todos los messages
router.get('/messages', (req, res) => {
    messagesSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Get specific Message by id
router.get('/messages/:id', (req, res) => {
    const { id } = req.params;
    messagesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Update Message by id
router.put('/messages/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    messagesSchema
    .updateOne({ _id: id }, { $set: {content} })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Delete Message by id
router.delete('/messages/:id', (req, res) => {
    const { id } = req.params;
    messagesSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router;
const express = require('express');
const conversationsSchema = require('../models/conversationsSchema');

const router = express.Router();

// Crear Conversations
router.post('/conversations', (req, res) => {
    const conversations = new conversationsSchema(req.body);
    conversations
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});


// Get todos los conversationss
router.get('/conversations', (req, res) => {
    conversationsSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Get specific conversations by id
router.get('/conversations/:id', (req, res) => {
    const { id } = req.params;
    conversationsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Update conversations by id
router.put('/conversations/:id', (req, res) => {
    const { id } = req.params;
    const { is_group, group_id } = req.body;
    conversationsSchema
    .updateOne({ _id: id }, { $set: {is_group, group_id} })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Delete conversations by id
router.delete('/conversations/:id', (req, res) => {
    const { id } = req.params;
    conversationsSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router;
const express = require('express');
const participantsSchema = require('../models/participantsSchema');

const router = express.Router();

// Create Participants
router.post('/participants', (req, res) => {
    const participans = new participantsSchema(req.body);
    participans
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});


// Get all Participants
router.get('/participants', (req, res) => {
    participantsSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Get specific Participant by id
router.get('/participants/:id', (req, res) => {
    const { id } = req.params;
    participantsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Update Participant by id
router.put('/participants/:id', (req, res) => {
    const { id } = req.params;
    const { user_id, conversation_id } = req.body;
    participantsSchema
    .updateOne({ _id: id }, { $set: {user_id, conversation_id} })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Delete Participant by id
router.delete('/participants/:id', (req, res) => {
    const { id } = req.params;
    participantsSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router;

const express = require('express');
const groupSchema = require('../models/groupSchema');

const router = express.Router();

// Crear Group
router.post('/groups', (req, res) => {
    const group = new groupSchema(req.body);
    group
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});


// Get todos los Group
router.get('/groups', (req, res) => {
    groupSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Get specific Group by id
router.get('/groups/:id', (req, res) => {
    const { id } = req.params;
    groupSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Update Group by id
router.put('/groups/:id', (req, res) => {
    const { id } = req.params;
    const { group_name, group_participants } = req.body;
    groupSchema
    .updateOne({ _id: id }, { $set: {group_name, group_participants} })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

// Delete Group by id
router.delete('/groups/:id', (req, res) => {
    const { id } = req.params;
    groupSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((err) => res.json({message: err}));
});

module.exports = router;

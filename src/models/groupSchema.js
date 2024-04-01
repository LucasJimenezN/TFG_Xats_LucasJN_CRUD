const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    group_name: {
        type: String,
        required: true,
    },
    group_participants: {
        type: Array,
        required: true,
    },
});

module.exports = mongoose.model('Group', groupSchema);
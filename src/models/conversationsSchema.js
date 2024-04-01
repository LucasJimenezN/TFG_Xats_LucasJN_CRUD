const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    is_group: {
        type: Boolean,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    group_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
});

module.exports = mongoose.model('Conversation', conversationSchema);
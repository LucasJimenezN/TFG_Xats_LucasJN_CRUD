const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const messagesSchema = mongoose.Schema({
    conversation_id: {
        type: ObjectId,
        required: true,
        ref: 'Conversations',
    },
    sender_id:{
        type: ObjectId,
        required: true,
        ref: 'Users',
    },
    content: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model('Messages', messagesSchema);

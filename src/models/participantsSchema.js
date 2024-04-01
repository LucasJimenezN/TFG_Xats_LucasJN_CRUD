const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const participantsSchema = mongoose.Schema({
    user_id: {
        type: ObjectId,
        required: true,
        ref: 'Users',
    },
    conversation_id: {
        type: ObjectId,
        required: true,
        ref: 'Conversations',
    },
});

module.exports = mongoose.model('Participants', participantsSchema);
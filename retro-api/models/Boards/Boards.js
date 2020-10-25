const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name: String,
    description: String,
    cards: [
        {
            name: String
        }
    ]
});

module.exports = mongoose.model('Boards', BoardSchema);
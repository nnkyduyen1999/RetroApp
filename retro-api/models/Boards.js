const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name: String,
    description: String,
    createDate: String,
    cards: [
        {
            name: String, 
            columnType: String
        }
    ],
    owner: String
});

module.exports = mongoose.model('boards', BoardSchema);
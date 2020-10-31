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
    ]
});

module.exports = mongoose.model('Boards', BoardSchema);
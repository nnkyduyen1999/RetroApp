const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name: String,
    description: String,
    createDate: {
        type: Date,
        default: Date.now
    },
    cards: [
        {
            name: String, 
            columnType: String,
            comments: [ 
                {
                    content: String,
                    isDeleted: Boolean
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Boards', BoardSchema);
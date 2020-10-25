const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Boards', BoardSchema);
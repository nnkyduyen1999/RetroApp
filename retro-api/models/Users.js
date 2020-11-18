const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const UserSchema = Schema({
    username: String,
    password: String,
    email: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});
module.exports = model('users', UserSchema);
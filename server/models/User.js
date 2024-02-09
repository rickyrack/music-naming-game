const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    authUID: {
        type: String,
        required: true,
        unique: true
    },
    avatarId: {
        type: Number,
        required: true,
        default: Math.floor(Math.random() * 1000) + 1
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    followers: {
        type: Array,
        defaultValue: []
    },
    following: {
        type: Array,
        defaultValue: []
    },
    descrtiption: {
        type: String
    }
}, {timestamps: true});

module.exports = UserSchema;
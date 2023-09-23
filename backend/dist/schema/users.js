"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    name: String,
    passwordHash: String,
});
exports.default = mongoose.model('User', userSchema);

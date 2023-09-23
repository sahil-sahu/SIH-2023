"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const medicineSchema = new mongoose.Schema({
    description: String,
    img: String,
    name: String,
    quantity: Number,
});
exports.default = mongoose.model('Medicine', medicineSchema);

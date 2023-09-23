"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ATMSchema = new mongoose_1.default.Schema({
    place: String,
    location: {
        type: {
            type: String,
            default: 'Point', // Specify the type as 'Point'
        },
        coordinates: [Number], // Array of [longitude, latitude] coordinates
    },
});
exports.default = mongoose_1.default.model('ATM', ATMSchema);

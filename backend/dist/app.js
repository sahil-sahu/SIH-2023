"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const users_1 = require("./routes/users");
const features_1 = require("./routes/features");
const client_1 = require("@prisma/client");
const medicines_1 = require("./routes/medicines");
exports.prisma = new client_1.PrismaClient();
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(cors());
// Use your user routes
app.use('/api/users', users_1.usersRouter);
app.use('/api', features_1.featureRouter);
app.use('/medicines', medicines_1.medicineRouter);
const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
    console.error('Database URL is not defined in the environment variables.');
    process.exit(1); // Exit the application or handle the error accordingly
}
// Now you can use dbUrl in your Mongoose connection code
mongoose_1.default.connect(dbUrl);
app.get('/health', (req, res) => {
    res.send('Hello, World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

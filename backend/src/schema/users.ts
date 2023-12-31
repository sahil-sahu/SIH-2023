const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  passwordHash: String,
});

export default mongoose.model('User', userSchema);

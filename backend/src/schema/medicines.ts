const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  description: String,
  img: String,
  name: String,
  quantity: Number,
});

export default mongoose.model('Medicine', medicineSchema);
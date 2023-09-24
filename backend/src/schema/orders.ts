const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });

const orderSchema = new mongoose.Schema({
  payment: {
    type: Boolean,
  },
  order: {
    type: [orderItemSchema], // An array of order items
    required: true,
  }
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  });

export default mongoose.model('Order', orderSchema);

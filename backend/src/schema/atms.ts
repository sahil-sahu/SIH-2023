import mongoose from 'mongoose';

const ATMSchema = new mongoose.Schema({
    place: String,
    location: {
      type: {
        type: String,
        default: 'Point', // Specify the type as 'Point'
      },
      coordinates: [Number], // Array of [longitude, latitude] coordinates
    },
  });

  export default mongoose.model('ATM', ATMSchema);
import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

// ye line correct hai ab:
const userModel = mongoose.models.customer || mongoose.model("customer", messageSchema);

export default userModel;

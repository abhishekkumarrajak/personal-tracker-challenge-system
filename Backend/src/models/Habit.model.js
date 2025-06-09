import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  habitName: { type: String, required: true }, 
  points: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
},{
    timestamps:true
}
);

export default mongoose.model('Habit', habitSchema);

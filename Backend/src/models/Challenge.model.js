import mongoose from 'mongoose';

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  points: { type: Number, required: true },
  duration: { type: Number, default: 7 }, // days
  usersJoined: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
},{
    timestamps:true
}
);

export default mongoose.model('Challenge', challengeSchema);

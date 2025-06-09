import mongoose from 'mongoose';

const userChallengeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
  progress: { type: Number, default: 0 },
  isCompleted: { type: Boolean, default: false },
  joinedAt: { type: Date, default: Date.now }
},{
    timestamps:true
}
);

export default mongoose.model('UserChallenge', userChallengeSchema);

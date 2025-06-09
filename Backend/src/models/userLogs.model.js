import mongoose from 'mongoose';

const logSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  habit: { type: String },
  challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' },
  date: { type: Date, default: Date.now }
},{
    timestamps:true
}
);

export default mongoose.model('Log', logSchema);

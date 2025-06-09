import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    score: { type: Number, default: 0 },
    badges: [{ type: String }], 
    habits: [{ type: String }], 
    completedChallenges: [{ type: String }], 
    hasSelectedHabits: { type: Boolean, default: false }, 
    createdAt: { type: Date, default: Date.now }
  },
  {
    timestamps: true
  }
);


userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model("User", userSchema);

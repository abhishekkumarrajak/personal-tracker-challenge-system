import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import User from '../models/user.models.js';

const router = express.Router();


router.get('/user/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' });
  }
});


router.post('/user/set-habits', authMiddleware, async (req, res) => {
  const userId = req.user._id;
  const { habits } = req.body;

  try {
    
    let score = 0;
    if (habits.length >= 3) score = 30;

    const user = await User.findByIdAndUpdate(
      userId,
      { habits, score, hasSelectedHabits: true },
      { new: true }
    );

    res.status(200).json({ message: 'Habits set successfully', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error setting habits' });
  }
});

 
router.get('/user/daily-challenges', authMiddleware, async (req, res) => {
  const sampleChallenges = [
    { id: 'pushups', name: "Do 10 pushups 💪", points: 10, completed: false },
    { id: 'meditate', name: "Meditate for 5 minutes 🧘", points: 10, completed: false },
    { id: 'compliment', name: "Compliment someone today 😊", points: 10, completed: false },
    { id: 'stretch', name: "Stretch for 5 minutes 🧎", points: 10, completed: false },
    { id: 'gratitude', name: "Write a gratitude note 🙏", points: 10, completed: false }
  ];


  const shuffled = sampleChallenges.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 2);

  res.json({ challenges: selected });
});


router.post('/user/complete-challenge', authMiddleware, async (req, res) => {
  const userId = req.user._id;
  const { challengeId } = req.body;

  const challengePointsMap = {
    pushups: 10,
    meditate: 10,
    compliment: 10,
    stretch: 10,
    gratitude: 10,
  };

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    
    if (user.completedChallenges && user.completedChallenges.includes(challengeId)) {
      return res.status(400).json({ message: 'Challenge already completed' });
    }

   
    user.completedChallenges = user.completedChallenges || [];
    user.completedChallenges.push(challengeId);

    user.score = (user.score || 0) + (challengePointsMap[challengeId] || 0);
    await user.save();

    res.json({ message: 'Challenge completed', score: user.score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error completing challenge' });
  }
});

export default router;

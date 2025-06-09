import dotenv from 'dotenv';
import connectDB from './db/connectionDB.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config({ path: './.env' }); 

const app = express();


app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.use('/api', authRoutes);
app.use('/api', userRoutes);


app.get('/path', (req, res) => {
  res.send("new path");
});

// DB connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log('MONGODB connection failed !!!', err);
  });

import express from 'express';
import { registerUser,loginUser} from '../controllers/authControllers.js';

const Router = express.Router();

Router.post('/auth/register', registerUser);
Router.post('/auth/login', loginUser);

export default Router;

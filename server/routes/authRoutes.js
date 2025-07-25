// server/routes/authRoutes.js
import express from 'express';
import { register, login, me } from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, me);

export default router;
import express from 'express';
import authenticateToken from '../middleware/authMiddleware.js';
import { login } from '../controllers/authControllers.js';
const router = express.Router();

router.post('/login', login)

export default router;
import express from 'express';
import { checkAttendanceStatus, checkIn, uploadPhotoIn } from '../controllers/attendanceControllers.js';
import authenticateToken from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/check-status', authenticateToken, checkAttendanceStatus)
router.post('/checkin', authenticateToken, uploadPhotoIn.single('photo'), checkIn)

export default router;
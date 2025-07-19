// server/routes/projectRoutes.js
import express from 'express';
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject
} from '../controllers/projectController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// public
router.get('/', getProjects);
router.get('/:slug', getProject);

// admin-only
router.post('/', protect, restrictTo('admin'), createProject);
router.put('/:slug', protect, restrictTo('admin'), updateProject);
router.delete('/:slug', protect, restrictTo('admin'), deleteProject);

export default router;
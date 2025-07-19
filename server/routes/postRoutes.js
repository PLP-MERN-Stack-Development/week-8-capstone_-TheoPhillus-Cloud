// server/routes/postRoutes.js
import express from 'express';
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost
} from '../controllers/postController.js';
import { protect, restrictTo } from '../middleware/auth.js';

const router = express.Router();

// public
router.get('/', getPosts);
router.get('/:slug', getPost);

// admin-only
router.post('/', protect, restrictTo('admin'), createPost);
router.put('/:slug', protect, restrictTo('admin'), updatePost);
router.delete('/:slug', protect, restrictTo('admin'), deletePost);

export default router;
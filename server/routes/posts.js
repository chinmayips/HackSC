import express from 'express';
// import { get } from 'mongoose';
import {getPosts } from '../controllers/posts.js';

const router = express.Router();
router.get('/', getPosts);

export default router;
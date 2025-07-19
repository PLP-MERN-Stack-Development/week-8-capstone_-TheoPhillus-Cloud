import Post from '../models/Post.js';

// Create Post
export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Posts
export const getPosts = async (_, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
};

// Get Single Post
export const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  post
    ? res.json(post)
    : res.status(404).json({ error: 'Post not found' });
};

// Update Post
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Post
export const deletePost = async (req, res) => {
  await Post.findOneAndDelete({ slug: req.params.slug });
  res.status(204).end();
};
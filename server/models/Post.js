import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title:      { type: String, required: true },
  slug:       { type: String, required: true, unique: true },
  excerpt:    { type: String },
  content:    { type: String },
  coverImage: { type: String },           // URL or file path
  createdAt:  { type: Date, default: Date.now }
});

export default mongoose.model('Post', postSchema);
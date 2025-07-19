import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  slug:        { type: String, required: true, unique: true },
  description: { type: String },
  techStack:   [String],                  // e.g. ["React", "Node", "MongoDB"]
  repoLink:    { type: String },
  liveLink:    { type: String },
  createdAt:   { type: Date, default: Date.now }
});

export default mongoose.model('Project', projectSchema);
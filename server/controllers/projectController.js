import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getProjects = async (_, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

export const getProject = async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  project
    ? res.json(project)
    : res.status(404).json({ error: 'Project not found' });
};

export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProject = async (req, res) => {
  await Project.findOneAndDelete({ slug: req.params.slug });
  res.status(204).end();
};
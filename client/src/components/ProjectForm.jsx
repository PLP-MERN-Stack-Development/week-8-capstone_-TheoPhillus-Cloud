// client/src/components/ProjectForm.jsx
import { useState } from 'react';
import { createProject } from '../api/projects';
import { useNavigate } from 'react-router-dom';

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: '', slug: '', description: '', techStack: '', repoLink: '', liveLink: ''
  });
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // techStack is a comma-separated string
    createProject({ 
      ...form, 
      techStack: form.techStack.split(',').map(s => s.trim()) 
    })
      .then(() => navigate('/projects'))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Project</h2>
      {[
        { name: 'title' },
        { name: 'slug' },
        { name: 'description' },
        { name: 'techStack', placeholder: 'React,Node.js,MongoDB' },
        { name: 'repoLink' },
        { name: 'liveLink' }
      ].map(({ name, placeholder }) => (
        <input
          key={name}
          name={name}
          placeholder={placeholder || name}
          value={form[name]}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Create</button>
    </form>
  );
}
// client/src/components/ProjectList.jsx
import { useEffect, useState } from 'react';
import { fetchProjects, deleteProject } from '../api/projects';

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then(res => setProjects(res.data));
  }, []);

  const handleDelete = slug => {
    deleteProject(slug).then(() =>
      setProjects(projects.filter(p => p.slug !== slug))
    );
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.slug}>
            {p.title}{' '}
            <button onClick={() => handleDelete(p.slug)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
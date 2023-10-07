import React, { useEffect, useState } from 'react';
import { listProjects } from '../services/api';

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Handle error or display an error message to the user
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Tags: {project.tags.join(', ')}</p>
            <p>Skills Required: {project.skillsRequired.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectListPage;

// src/components/ProjectDetails.js
import React, { useState, useEffect } from "react";

const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);

  // Fetch project details from the backend API based on the projectId
  useEffect(() => {
    // Implement API fetch logic here
    // Example: fetchProjectDetailsFromAPI(projectId)
  }, [projectId]);

  // Handle applying for the project
  const handleApply = () => {
    // Implement logic to apply for the project
    // Example: applyForProject(projectId)
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Project Details</h2>
      <h3>{project.title}</h3>
      <p>Objectives: {project.objectives}</p>
      <p>Required Skills: {project.requiredSkills}</p>
      <p>Scope of Work: {project.scopeOfWork}</p>
      <p>Timeline: {project.timeline}</p>
      <p>Collaborator Expectations: {project.collaboratorExpectations}</p>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default ProjectDetails;

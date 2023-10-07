import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createProject } from '../services/api';

function CreateProject() {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    tags: '',
    skillsRequired: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createProject(projectData);
      console.log('Project created:', response);
      // Handle success or redirect to another page
    } catch (error) {
      console.error('Error creating project:', error);
      // Handle error or display an error message to the user
    }
  };

  // Render your form and handle form input changes
}

export default CreateProject;

// src/components/ProjectCreationForm.js
import React, { useState } from "react";

const ProjectCreationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requiredSkills: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation here
    if (!formData.title || !formData.description || !formData.requiredSkills) {
      alert("Please fill in all required fields.");
      return;
    }

    // Submit formData to the backend API
    // Example: createProjectOnAPI(formData);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            rows="4" // You can adjust the number of rows as needed
          />
        </div>
        <div>
          <label htmlFor="requiredSkills">Required Skills:</label>
          <input
            type="text"
            id="requiredSkills"
            name="requiredSkills"
            value={formData.requiredSkills}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default ProjectCreationForm;

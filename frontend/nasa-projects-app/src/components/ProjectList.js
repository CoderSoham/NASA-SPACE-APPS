import React, { useState, useEffect } from "react";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    keywords: "",
    domain: "",
    skills: "",
  });

  // Fetch project data from the backend API


  useEffect(() => {
    // Replace with your API endpoint
    fetch("https://your-api-url/projects")
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched project data in the state
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, []);
  
  // Implement filtering logic based on state
  const filteredProjects = projects.filter((project) => {
    const { title, domain, requiredSkills } = project;
    const { keywords, domain: domainFilter, skills } = filters;

    // Implement filtering conditions here
    const keywordFilter =
      title.toLowerCase().includes(keywords.toLowerCase()) ||
      requiredSkills.toLowerCase().includes(skills.toLowerCase());

    const domainFilterMatch =
      domainFilter === "" || domain.toLowerCase() === domainFilter.toLowerCase();

    return keywordFilter && domainFilterMatch;
  });

  return (
    <div>
      <h2>Open Science Projects</h2>
      {/* Implement filtering and sorting UI here */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by keywords"
          value={filters.keywords}
          onChange={(e) =>
            setFilters({ ...filters, keywords: e.target.value })
          }
        />
        <select
          value={filters.domain}
          onChange={(e) => setFilters({ ...filters, domain: e.target.value })}
        >
          <option value="">All Domains</option>
          {/* Map available domains here */}
        </select>
        <input
          type="text"
          placeholder="Filter by skills"
          value={filters.skills}
          onChange={(e) =>
            setFilters({ ...filters, skills: e.target.value })
          }
        />
      </div>
      {/* Render the list of projects */}
      <ul>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            {/* Display project details here */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Add more project details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

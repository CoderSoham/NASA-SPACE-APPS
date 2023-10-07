const admin = require('firebase-admin');
const { predefinedTags, predefinedSkills } = require('../components/keywords'); // Import predefined tags and skills

// Initialize Firebase Admin SDK
const serviceAccount = require('../config/nasa-space-apps-7-006dee006e87.json');

// Function to split and trim a string, removing duplicates
const splitAndTrim = (value) => {
  return [...new Set(value.split(',').map((item) => item.trim()))];
};

// Controller to create a new project
exports.createProject = async (req, res) => {
  try {
    const { title, description, tags, skillsRequired } = req.body;

    // Validate and filter tags against predefinedTags
    const validatedTags = splitAndTrim(tags).filter((tag) =>
      predefinedTags.includes(tag)
    );

    // Validate and filter skillsRequired against predefinedSkills
    const validatedSkills = splitAndTrim(skillsRequired).filter((skill) =>
      predefinedSkills.includes(skill)
    );

    // Reference to the Firebase Realtime Database
    const db = admin.database();
    const projectsRef = db.ref('projects'); // Replace with your Firebase reference

    // Create a new project with validated tags and skills
    const newProject = {
      title,
      description,
      tags: validatedTags,
      skillsRequired: validatedSkills,
    };

    // Push the new project to the database
    const projectSnapshot = await projectsRef.push(newProject);

    res.json({ message: 'Project created successfully', projectId: projectSnapshot.key });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

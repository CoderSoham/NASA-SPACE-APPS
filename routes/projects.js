const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const serviceAccount = require('../config/nasa-space-apps-7-006dee006e87.json'); // Update with the path to your service account key JSON file
const dbURL = 'https://nasa-space-apps-7-default-rtdb.firebaseio.com/'; // Update with your Firebase project URL


// Create a reference to the Firebase Realtime Database
const db = admin.database();
const projectsRef = db.ref('projects');

// Function to split and trim a string, removing duplicates
const splitAndTrim = (value) => {
  return [...new Set(value.split(',').map((item) => item.trim()))];
};

// Controller to create a new project
router.post('/create', async (req, res) => {
  try {
    const { title, description, tags, skillsRequired } = req.body;

    // Validate and filter tags against predefinedTags
    const validatedTags = splitAndTrim(tags);

    // Validate and filter skillsRequired against predefinedSkills
    const validatedSkills = splitAndTrim(skillsRequired);

    // Create a new project with validated tags and skills
    const newProject = {
      title,
      description,
      tags: validatedTags,
      skillsRequired: validatedSkills,
    };

    // Push the project to the Firebase Realtime Database
    const newProjectRef = await projectsRef.push(newProject);

    res.json({
      message: 'Project created successfully',
      projectId: newProjectRef.key,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// Add other routes if needed

module.exports = router;

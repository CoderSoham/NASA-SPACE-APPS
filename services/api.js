import axios from 'axios';
const admin = require('firebase-admin');
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const createProject = async (projectData) => {
  try {
    const response = await api.post('/projects/create', projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const listProjects = async () => {
  try {
    const response = await api.get('/projects/list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Add more API functions as needed

// src/App.js
import React from "react";
import ProjectList from "./components/ProjectList";
import "./App.css"; // Add CSS styling as needed
import UserProfile from "./components/UserProfile";
import ProjectDetails from "./components/ProjectDetails";
import ProjectCreationForm from "./components/ProjectCreationForm";



function App() {
  return (
    <div className="App">
      <UserProfile />
      <ProjectList />
      <ProjectDetails />
      <ProjectCreationForm />


    </div>
  );
}

export default App;

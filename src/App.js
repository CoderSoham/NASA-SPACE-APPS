import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectListPage from './components/ProjectListPage';
import CreateProject from './components/CreateProject'; // Import the CreateProject component

function App() {
  return (
    <Router>
      <Switch>
        {/* Other routes */}
        <Route path="/projects" component={ProjectListPage} />
        <Route path="/create-project" component={CreateProject} /> {/* New route for creating a project */}
      </Switch>
    </Router>
  );
}

export default App;

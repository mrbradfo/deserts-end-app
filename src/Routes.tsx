import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import ManageTeams from './components/ManageTeams';
import ManageSchedules from './components/ManageSchedules';

const Routes = () => {
  return (
    <Router>
      <Route path="/" Component={Home} />
      <Route path="/manage-teams" Component={ManageTeams} />
      <Route path="/manage-schedules" Component={ManageSchedules} />
    </Router>
  );
};

export default Routes;

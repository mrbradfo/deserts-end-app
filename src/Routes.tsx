import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ManageTeams from './components/ManageTeams';
import ManageSchedules from './components/ManageSchedules';
import Login from './components/login/Login';

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />
        <Route path="/manage-teams" Component={ManageTeams} />
        <Route path="/manage-schedules" Component={ManageSchedules} />
      </Routes>
    </Router>
  );
};

export default routes;

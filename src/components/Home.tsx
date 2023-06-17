import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './Home.css';
import { getRoles, getVolunteers } from '../api';
import { Role, User, Volunteer, VolunteerProps } from '../types';
import TeamSchedulePanel from './TeamSchedulePanel';
import MySchedulePanel from './MySchedulePanel';
import VolunteerSchedulePanel from './VolunteerSchedulePanel';
import RolePanel from './RolePanel';

function Home() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>();

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await getVolunteers();
        setVolunteers(response);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, []);

  const [roles, setRoles] = useState<Role[]>();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        setRoles(response);
      } catch (error) {
        console.error('Error fetching Roles:', error);
      }
    };

    fetchRoles();
  }, []);

  return (
    <div className="Home">
      <header className="home-header">
        <div className="home-title">DE</div>
      </header>
      <Tabs variant="enclosed" className="tabs">
        <TabList>
          <Tab>Team Schedule</Tab>
          <Tab>My Schedule</Tab>
          <Tab>Volunteers</Tab>
          <Tab>Teams</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{TeamSchedulePanel({ volunteers, roles })}</TabPanel>
          <TabPanel>{MySchedulePanel({ volunteers, roles })}</TabPanel>
          <TabPanel>{VolunteerSchedulePanel({ volunteers, roles })}</TabPanel>
          <TabPanel>{RolePanel({ volunteers, roles })}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;

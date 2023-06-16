import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './Home.css';
import SchedulePanel from './SchedulePanel';
import VolunteerPanel from './VolunteerPanel';
import { getRoles, getVolunteers } from '../api';
import { Role, User, Volunteer, VolunteerProps } from '../types';

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
      <Tabs size="md" variant="enclosed" className="tabs">
        <TabList>
          <Tab>Team Schedule</Tab>
          <Tab>Volunteers</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{SchedulePanel({ volunteers, roles })}</TabPanel>
          <TabPanel>{VolunteerPanel({ volunteers, roles })}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;

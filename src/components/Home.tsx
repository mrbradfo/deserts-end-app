import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './Home.css';
import { getRoles, getVolunteers } from '../api';
import { Role, Volunteer } from '../types';
import Users from './Users';
import Teams from './Teams';
import TeamSchedule from './TeamSchedule';
import MySchedule from './MySchedule';

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
          <Tab>Users</Tab>
          <Tab>Teams</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{TeamSchedule({ volunteers, roles })}</TabPanel>
          <TabPanel>{MySchedule({ volunteers, roles })}</TabPanel>
          <TabPanel>{Users({ volunteers, roles })}</TabPanel>
          <TabPanel>{Teams({ volunteers, roles })}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './styles/Home.css';
import SchedulePanel from './SchedulePanel';
import VolunteerPanel from './VolunteerPanel';
import { getVolunteers } from '../api';
import { VolunteerProps } from '../types';

// [{ id: 2, name: 'matt', schedule: ['sunday', 'monday'] }]
// id: number;
// volunteerId: number;
// date: Date;
// time: string;
function Home() {
  const defaultVolunteers: VolunteerProps = {
    volunteers: [
      {
        id: 1,
        name: 'matt',
        phone: '123-456-7890',
        schedule: [
          {
            id: 1,
            volunteerId: 1,
            date: new Date(),
            time: 'morning',
          },
          {
            id: 2,
            volunteerId: 1,
            date: new Date(new Date().getDate() + 7),
            time: 'afternoon',
          },
        ],
      },
      {
        id: 2,
        name: 'john',
        phone: '123-456-7890',
      },
    ],
  };

  const [
    volunteers = { volunteers: defaultVolunteers.volunteers },
    setVolunteers,
  ] = useState<VolunteerProps>();

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await getVolunteers();
        setVolunteers(response.data);
      } catch (error) {
        console.error('Error fetching volunteers:', error);
      }
    };

    fetchVolunteers();
  }, []);

  return (
    <div className="Home">
      <header className="home-header">
        <div className="home-title">DE</div>
      </header>
      <Tabs size="md" variant="enclosed" className="tabs">
        <TabList>
          <Tab>Schedule</Tab>
          <Tab>Volunteers</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>schedule!</p>
            {SchedulePanel(volunteers || { volunteers: [] })}
          </TabPanel>
          <TabPanel>
            <p>volunteers!</p>
            {VolunteerPanel(volunteers || { volunteers: [] })}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;

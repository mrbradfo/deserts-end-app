import { useEffect, useState } from 'react';
import {
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import './Home.css';
import { useNavigate } from 'react-router';
import { getAll } from '../api';
import TeamSchedule from './TeamSchedule';
import MySchedule from './MySchedule';
import { PlanView, Team, User } from '../types';

function Home() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>();
  const [teams, setTeams] = useState<Team[]>();
  const [plan_views, setPlans] = useState<PlanView[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAll<User>('users');
        setUsers(response);
      } catch (error) {
        console.error('Error fetching Users:', error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getAll<Team>('teams');
        setTeams(response);
      } catch (error) {
        console.error('Error fetching Teams:', error);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await getAll<PlanView>('plans_view');
        setPlans(response);
      } catch (error) {
        console.error('Error fetching Plans:', error);
      }
    };

    fetchPlans();
  }, []);

  console.log('users', users);
  console.log('teams', teams);
  console.log('plans', plan_views);

  return (
    <div className="Home">
      <header className="home-header">
        <div className="home-title">DE</div>
      </header>
      <Button
        colorScheme="teal"
        variant="outline"
        size="sm"
        onClick={() => navigate('/manage-teams')}
      >
        Manage Teams
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        size="sm"
        onClick={() => navigate('/manage-schedules')}
      >
        Manage Schedules
      </Button>
      <Tabs variant="enclosed" className="tabs">
        <TabList>
          <Tab>Team Schedule</Tab>
          <Tab>My Schedule</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{TeamSchedule({ plan_views, teams, users })}</TabPanel>
          <TabPanel>{MySchedule({ plan_views, teams, users })}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;

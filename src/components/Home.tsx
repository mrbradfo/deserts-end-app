import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import './Home.css';
import { getAll } from '../api';
import TeamSchedule from './TeamSchedule';
import MySchedule from './MySchedule';
import { Assignment, Plan, Team, User } from '../types';
import UsersPage from './UsersPage';
import TeamsPage from './TeamsPage';

function Home() {
  const [users, setUsers] = useState<User[]>();
  const [teams, setTeams] = useState<Team[]>();
  const [plans, setPlans] = useState<Plan[]>();
  const [assignments, setAssignments] = useState<Assignment[]>();

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
        const response = await getAll<Plan>('plans');
        setPlans(response);
      } catch (error) {
        console.error('Error fetching Plans:', error);
      }
    };

    fetchPlans();
  }, []);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await getAll<Assignment>('assignments');
        setAssignments(response);
      } catch (error) {
        console.error('Error fetching Assignments:', error);
      }
    };

    fetchAssignments();
  }, []);

  console.log('users', users);
  console.log('teams', teams);
  console.log('plans', plans);
  console.log('assignments', assignments);

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
          <TabPanel>
            {TeamSchedule({ users, teams, plans, assignments })}
          </TabPanel>
          <TabPanel>
            {MySchedule({ users, teams, plans, assignments })}
          </TabPanel>
          <TabPanel>{UsersPage({ users, teams, plans, assignments })}</TabPanel>
          <TabPanel>{TeamsPage({ users, teams, plans, assignments })}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Home;

/* eslint-disable no-nested-ternary */
import {
  Button,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import useUser from '../hooks/useUser';

function ManageTeams() {
  const navigate = useNavigate();
  const { user } = useUser(1);
  console.log('user', user);

  // const { teams } = useTeams();
  // const { plan_views } = usePlanViews();

  return (
    <>
      <Button onClick={() => navigate('/')}>Back</Button>
      <Heading as="h1" size="lg" mb="4">
        Manage Teams
      </Heading>
      <br />
      {/* {teams?.map((team) => (
        <div key={team.id}>
          <Heading as="h2" size="md" mb="4">
            {team.name}
          </Heading>
          <br />
        </div>
      ))} */}
      <br />
      <Tabs size="md" variant="enclosed">
        <TabList>
          <Tab>Worship</Tab>
          <Tab>Hospitality</Tab>
          <Button>ADD</Button>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>Worship team!</p>
          </TabPanel>
          <TabPanel>
            <p>Hospitality team!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default ManageTeams;

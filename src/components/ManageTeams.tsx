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
import { VolunteerProps } from '../types';

// function ManageTeams({ plan_views, users, teams }: VolunteerProps) {
function ManageTeams() {
  return (
    <>
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

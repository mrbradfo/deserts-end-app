import React from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
} from '@chakra-ui/react';
import { VolunteerProps } from '../types';

const currentSunday = 'April 10, 2023';
const currentProPresenterVolunteers = ['John Doe', 'Jane Smith'];
const currentSoundVolunteers = ['Alex Johnson', 'Emily Davis'];
const currentSetupVolunteers = ['Michael Brown', 'Olivia Wilson'];
const nextSunday = 'April 17, 2023';
const nextProPresenterVolunteers = ['David Lee', 'Sarah Thompson'];
const nextSoundVolunteers = ['Ryan Garcia', 'Emma Roberts'];
const nextSetupVolunteers = ['William Davis', 'Sophia Johnson'];

function SchedulePanel({ volunteers }: VolunteerProps) {
  return (
    <Box maxW="500px" m="auto">
      <Heading as="h1" size="lg" mb="4">
        Volunteer Schedule
      </Heading>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>ProPresenter</Th>
            <Th>Sound</Th>
            <Th>Setup</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{currentSunday}</Td>
            {volunteers?.map((volunteer) =>
              volunteer.schedule?.[0].date.toDateString() === currentSunday ? (
                <Td key={volunteer.id}>{volunteer.name}</Td>
              ) : (
                <Td key={volunteer.id} />
              ),
            )}
          </Tr>
          <Tr>
            <Td />
            <Td>{currentProPresenterVolunteers[1]}</Td>
            <Td>{currentSoundVolunteers[1]}</Td>
            <Td>{currentSetupVolunteers[1]}</Td>
          </Tr>
          <Tr>
            <Td>{nextSunday}</Td>
            <Td>{nextProPresenterVolunteers[0]}</Td>
            <Td>{nextSoundVolunteers[0]}</Td>
            <Td>{nextSetupVolunteers[0]}</Td>
          </Tr>
          <Tr>
            <Td />
            <Td>{nextProPresenterVolunteers[1]}</Td>
            <Td>{nextSoundVolunteers[1]}</Td>
            <Td>{nextSetupVolunteers[1]}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default SchedulePanel;

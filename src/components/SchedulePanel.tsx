import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { VolunteerProps } from '../types';

function SchedulePanel({ volunteers }: VolunteerProps) {
  console.log('volunteers:', volunteers);

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Schedule</Th>
          </Tr>
        </Thead>
        <Tbody>
          {volunteers?.map((volunteer) => (
            <Tr key={volunteer.id}>
              <Td>{volunteer.name}</Td>
              <Td>
                {volunteer.schedule?.map((schedule) => (
                  <div key={schedule.id}>{schedule.date.toDateString()}</div>
                ))}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default SchedulePanel;

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Card,
  Button,
  Text,
  CardHeader,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/react';
import { VolunteerProps } from '../types';

// List of roles and volunteers scheduled to those roles.
/* 
MENU

- My Account 
  - Notifications   []SMS []Email
  - Logout 
- Add Blackout days


*/

// | My Schedule  | Team Schedule |
// <--          -->
// SUNDAY 7/1/23
//
// ProPresenter
//      Volunteer     |  Confirmed?   |
//    volunteer a
//    volunteer b
//    volunteer c

// Sound

// position

function TeamSchedulePanel({ volunteers, roles }: VolunteerProps) {
  console.log('roles', roles);
  console.log('volunteers', volunteers);

  return (
    <Box maxW="1000px" m="auto">
      <Heading as="h1" size="lg" mb="4">
        Volunteer Schedule
      </Heading>

      <Text>Sunday, July 1, 2023</Text>
      <div className="arrows">
        <Button onClick={() => console.log('prev week')}>Prev Week</Button>
        <Button onClick={() => console.log('next week')}>Next Week</Button>
      </div>

      {roles?.map((position) => (
        <Card key={position.id}>
          <CardHeader>
            <Heading as="h2" size="md" textAlign="left">
              {position.position}
            </Heading>
          </CardHeader>
          {volunteers?.map((volunteer) => (
            <div key={volunteer.user.id}>
              {volunteer.roles?.map(
                (role) =>
                  volunteer.user.id === position.user_id &&
                  role.position === position.position && (
                    <Table variant="simple" key={role.id}>
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Date</Th>
                          <Th>Confirmed?</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td
                            backgroundColor={
                              !volunteer.user.first_name ? 'yellow.100' : ''
                            }
                          >
                            <Box display="flex" alignItems="center">
                              <Avatar
                                name={`${volunteer.user.first_name} ${volunteer.user.last_name}`}
                              >
                                <AvatarBadge
                                  borderColor="papayawhip"
                                  bg="green.500"
                                  boxSize="1.25em"
                                />
                              </Avatar>

                              {volunteer.user.first_name === null
                                ? 'NEEDED'
                                : volunteer.user.first_name}
                            </Box>
                          </Td>
                          <Td>{role.date}</Td>
                          <Td bg={role.confirmed ? 'green.200' : 'red.200'}>
                            {role.confirmed ? 'Yes' : <Button>Confirm</Button>}
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  ),
              )}
            </div>
          ))}
        </Card>
      ))}
      <br />
    </Box>
  );
}

export default TeamSchedulePanel;

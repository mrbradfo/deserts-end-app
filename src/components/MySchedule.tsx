import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  AlertTitle,
  Card,
  Button,
  Alert,
  Text,
  List,
  ListItem,
  ListIcon,
  CardHeader,
  Avatar,
  Wrap,
  WrapItem,
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

function MySchedule({ users, teams, plans, assignments }: VolunteerProps) {
  return (
    // <Box maxW="1000px" m="auto">
    //   <Heading as="h1" size="lg" mb="4">
    //     Volunteer Schedule
    //   </Heading>

    //   <Text>Sunday, July 1, 2023</Text>
    //   <div className="arrows">
    //     <Button onClick={() => console.log('prev week')}>Prev Week</Button>
    //     <Button onClick={() => console.log('next week')}>Next Week</Button>
    //   </div>

    //   {roles?.map((position) => (
    //     <Card key={position.id}>
    //       <CardHeader>
    //         <Heading as="h2" size="md" textAlign="left">
    //           {position.position}
    //         </Heading>
    //       </CardHeader>
    //       {volunteers?.map((volunteer) => (
    //         <div key={volunteer.user.id}>
    //           {volunteer.roles?.map(
    //             (role) =>
    //               volunteer.user.id === position.user_id &&
    //               role.position === position.position && (
    //                 <Table variant="simple" key={role.id}>
    //                   <Thead>
    //                     <Tr>
    //                       <Th>Name</Th>
    //                       <Th>Date</Th>
    //                       <Th>Confirmed?</Th>
    //                     </Tr>
    //                   </Thead>
    //                   <Tbody>
    //                     <Tr>
    //                       <Td
    //                         backgroundColor={
    //                           !volunteer.user.first_name ? 'yellow.100' : ''
    //                         }
    //                       >
    //                         <Box display="flex" alignItems="center">
    //                           <Avatar
    //                             name={`${volunteer.user.first_name} ${volunteer.user.last_name}`}
    //                           >
    //                             <AvatarBadge
    //                               borderColor="papayawhip"
    //                               bg="green.500"
    //                               boxSize="1.25em"
    //                             />
    //                           </Avatar>

    //                           {volunteer.user.first_name === null
    //                             ? 'NEEDED'
    //                             : volunteer.user.first_name}
    //                         </Box>
    //                       </Td>
    //                       <Td>{role.date}</Td>
    //                       <Td bg={role.confirmed ? 'green.200' : 'red.200'}>
    //                         {role.confirmed ? 'Yes' : <Button>Confirm</Button>}
    //                       </Td>
    //                     </Tr>
    //                   </Tbody>
    //                 </Table>
    //               ),
    //           )}
    //         </div>
    //       ))}
    //     </Card>
    //   ))}
    //   <br />
    //   {/* {volunteers?.map((volunteer) => (
    //     <div key={volunteer.user.id}>
    //       <div key={volunteer.user.id}>
    //         <h2>
    //           {volunteer.roles?.map((role) => (
    //             <div key={role.id} className="volunteer-card">
    //               <Card>
    //                 <Table variant="simple">
    //                   <Thead>
    //                     <Tr>
    //                       <Th>Name</Th>
    //                       <Th>Position</Th>
    //                       <Th>Date</Th>
    //                       <Th>Confirmed?</Th>
    //                     </Tr>
    //                   </Thead>
    //                   <Tbody>
    //                     <Tr>
    //                       <Td>{volunteer.user.first_name}</Td>
    //                       <Td>{role.position}</Td>
    //                       <Td>{role.date}</Td>
    //                       <Td bg={role.confirmed ? 'green.200' : 'red.200'}>
    //                         {role.confirmed ? 'Yes' : <Button>Confirm</Button>}
    //                       </Td>
    //                     </Tr>
    //                   </Tbody>
    //                 </Table>
    //               </Card>
    //             </div>
    //           ))}
    //         </h2>
    //       </div>
    //     </div>
    //   ))} */}
    // </Box>
    <Box maxW="1000px" m="auto">
      <Heading as="h1" size="lg" mb="4">
        My Schedule
      </Heading>
    </Box>
  );
}

export default MySchedule;

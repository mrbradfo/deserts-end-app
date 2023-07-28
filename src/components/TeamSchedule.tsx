/* eslint-disable no-nested-ternary */
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  Input,
  ModalFooter,
  useDisclosure,
  CardBody,
  CardHeader,
  Heading,
  Card,
  SimpleGrid,
  Box,
  Text,
  Switch,
  Flex,
  AvatarBadge,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import { useState } from 'react';
import { User, VolunteerProps } from '../types';
import Footer from './Footer';

function TeamSchedule({ plan_views, users, teams }: VolunteerProps) {
  const {
    isOpen: addTeamIsOpen,
    onOpen: addTeamOnOpen,
    onClose: addTeamOnClose,
  } = useDisclosure();

  const {
    isOpen: viewUserIsOpen,
    onOpen: viewUserOnOpen,
    onClose: viewUserOnClose,
  } = useDisclosure();

  const [offset, setOffset] = useState(0);
  const [userModalData, setUserModalData] = useState<User>({} as User);

  const plan = plan_views && plan_views[offset]?.plan;
  console.log('plan from offset is ', plan);

  const handleOpenUserModal = (user: User) => {
    setUserModalData(user || ({} as User));
    viewUserOnOpen();
  };

  return (
    <>
      <Heading as="h1" size="lg" mb="4">
        Volunteer Schedule
      </Heading>
      <div className="arrows">
        <Button onClick={() => setOffset(offset - 1)}>Prev Week</Button>
        <Text fontWeight={700}>{getSundayByOffset(offset).toDateString()}</Text>
        <Button onClick={() => setOffset(offset + 1)}>Next Week</Button>
      </div>
      <br />
      {plan?.teams?.map((team) => (
        <SimpleGrid key={team.id} spacing={4} border="20px">
          <Card
            outline={20}
            border="200px"
            borderColor="black"
            backgroundColor="#034654"
            textAlign="left"
            borderRadius={10}
          >
            <CardHeader
              backgroundColor="#fbe8d7"
              borderRadius="10px 10px 0px 0px"
            >
              <Heading as="h3" size="md" textAlign="left">
                {team.name}
              </Heading>
            </CardHeader>
            <CardBody className="card-body" borderRadius={10} color="white">
              <div key={team.id}>
                {/* <div>{team.accepted}</div>
                    <div>{team.pending}</div>
                    <div>{team.declined}</div> */}
                {team.positions.map((position) => (
                  <div key={position.id}>
                    <Heading as="h3" size="md">
                      {position.name}
                    </Heading>
                    {position.volunteers.map((volunteer) => (
                      <div key={volunteer.id}>
                        <Flex gap={2} alignItems="center">
                          <Button
                            border="1px solid #6098a6"
                            borderRadius="10px"
                            padding="25px 15px"
                            backgroundColor="#fbe8d7"
                            color="black"
                            _hover={{ bg: '#1c5767' }}
                            onClick={
                              () => handleOpenUserModal(volunteer.user)
                              // eslint-disable-next-line react/jsx-curly-newline
                            }
                          >
                            <Avatar
                              size="sm"
                              name={
                                volunteer.user
                                  ? `${volunteer.user?.first_name} ${volunteer.user?.last_name}`
                                  : '?'
                              }
                              padding-right={4}
                            >
                              <AvatarBadge
                                borderColor="papayawhip"
                                bg={
                                  // confirmed pending declined
                                  // eslint-disable-next-line no-nested-ternary
                                  volunteer.confirmation_status === 'Confirmed'
                                    ? 'green.500'
                                    : volunteer.confirmation_status ===
                                      'Pending'
                                    ? 'yellow.500'
                                    : volunteer.confirmation_status ===
                                      'Declined'
                                    ? 'red.500'
                                    : 'gray.500'
                                }
                                boxSize="1.25em"
                              />
                            </Avatar>
                            <Box fontWeight={400} padding="10px">
                              {volunteer.user
                                ? `${volunteer.user?.first_name} ${volunteer.user?.last_name}`
                                : 'Needed'}
                              <Badge
                                ml="1"
                                colorScheme={
                                  volunteer.confirmation_status === 'Confirmed'
                                    ? 'green'
                                    : volunteer.confirmation_status ===
                                      'Pending'
                                    ? 'yellow'
                                    : volunteer.confirmation_status ===
                                      'Declined'
                                    ? 'red'
                                    : 'gray'
                                }
                              >
                                {volunteer.confirmation_status}
                              </Badge>
                            </Box>
                          </Button>
                        </Flex>
                      </div>
                    ))}
                    {position.capacity - position.filled > 0 && (
                      <Button onClick={() => addTeamOnOpen()}>
                        {position.capacity - position.filled}
                      </Button>
                    )}
                    <br />
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          <br />
        </SimpleGrid>
      ))}
    </>
  );
}

function getSundayByOffset(offset: number) {
  console.log('getting sunday by offset', offset);
  const today = new Date();
  const sunday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - today.getDay() + offset * 7,
  );
  return sunday;
}

export default TeamSchedule;

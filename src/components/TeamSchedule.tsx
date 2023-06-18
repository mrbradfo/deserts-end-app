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
  Avatar,
  AvatarBadge,
  SimpleGrid,
  Box,
  Flex,
  Text,
  Switch,
} from '@chakra-ui/react';
import { useState } from 'react';
import { User, VolunteerProps } from '../types';

function TeamSchedule({ users, teams, plans, assignments }: VolunteerProps) {
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

  const [offset, setOffset] = useState(1);
  const [userModalData, setUserModalData] = useState<User>({} as User);

  const plan = plans?.find((p) => p.id === offset);

  const handleOpenUserModal = (userId: number) => {
    const user = users?.find((u) => u.id === userId);
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
      {teams?.map((team) => (
        <SimpleGrid key={team.id} spacing={4} border="20px">
          <Card
            outline={20}
            border="200px"
            borderColor="black"
            backgroundColor="blue.100"
            textAlign="left"
          >
            <CardHeader>
              <Heading as="h3" size="md" textAlign="left">
                {team.name}
              </Heading>
            </CardHeader>
            <CardBody className="card-body">
              {JSON.parse(team.positions)?.map((position: string) => (
                <Box key={team.id}>
                  <Text fontWeight={700}>{position}</Text>
                  {assignments?.map((assignment) => {
                    if (
                      assignment.plan_id === plan?.id &&
                      assignment.position === position
                    ) {
                      const user = users?.find(
                        (u) => u.id === assignment.user_id,
                      );

                      return (
                        <Flex key={assignment.id} gap={2} alignItems="center">
                          <Button
                            border="2px solid #1c5767"
                            borderRadius="10px"
                            padding="20px"
                            onClick={
                              () => handleOpenUserModal(assignment.user_id)
                              // eslint-disable-next-line react/jsx-curly-newline
                            }
                          >
                            <Avatar
                              size="sm"
                              name={
                                assignment.user_id
                                  ? `${user?.first_name} ${user?.last_name}`
                                  : '?'
                              }
                            >
                              <AvatarBadge
                                borderColor="papayawhip"
                                bg={
                                  // confirmed pending declined
                                  // eslint-disable-next-line no-nested-ternary
                                  assignment.user_id
                                    ? 'green.500'
                                    : 'yellow.500'
                                }
                                boxSize="1.25em"
                              />
                            </Avatar>
                            <Box>
                              {user?.first_name} {user?.last_name}
                            </Box>
                          </Button>
                        </Flex>
                      );
                    }
                    return null;
                  })}
                </Box>
              ))}
            </CardBody>
          </Card>
          <br />
        </SimpleGrid>
      ))}
      <Button onClick={addTeamOnOpen}>Add Team</Button>
      <Modal isOpen={addTeamIsOpen} onClose={addTeamOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input placeholder="name" size="md" />
              <Input placeholder="positions" size="md" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addTeamOnClose}>
              Close
            </Button>
            <Button variant="blue">Add Team</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={viewUserIsOpen} onClose={viewUserOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {`${userModalData.first_name} ${userModalData.last_name}`}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text>
              <strong>ID:</strong> {userModalData.id}
            </Text>
            <Text>
              <strong>First Name:</strong> {userModalData.first_name}
            </Text>
            <Text>
              <strong>Last Name:</strong> {userModalData.last_name}
            </Text>
            <Text>
              <strong>Email:</strong> {userModalData.email}
            </Text>

            <Text>
              <strong>Admin:</strong> {userModalData.admin ? 'Yes' : 'No'}
            </Text>
            <Text>
              <strong>Blackout Dates:</strong> {userModalData.blackout_dates}
              <Button>Add Blackout Dates</Button>
            </Text>
            <Text>
              <strong>Text Reminders:</strong>
              <Switch
                colorScheme="teal"
                isChecked={userModalData.txt_alerts}
                // onChange={handleTxtRemindersChange}
              />
            </Text>
            <Text>
              <strong>Email Reminders:</strong>
              <Switch
                colorScheme="teal"
                isChecked={userModalData.email_alerts}
                // onChange={handleEmailRemindersChange}
              />
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={viewUserOnClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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

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

function TeamSchedule({ volunteers, roles }: VolunteerProps) {
  const {
    isOpen: addRoleIsOpen,
    onOpen: addRoleOnOpen,
    onClose: addRoleOnClose,
  } = useDisclosure();

  const {
    isOpen: viewUserIsOpen,
    onOpen: viewUserOnOpen,
    onClose: viewUserOnClose,
  } = useDisclosure();

  const [offset, setOffset] = useState(1);
  const [userModalData, setUserModalData] = useState<User>({} as User);

  const handleOpenUserModal = (data: User) => {
    setUserModalData(data);
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
      {volunteers?.map((volunteer) =>
        volunteer.roles.map((role) => (
          <SimpleGrid key={role.id} spacing={4} border="20px">
            <Card
              outline={20}
              border="200px"
              borderColor="black"
              backgroundColor="blue.100"
              textAlign="left"
            >
              <CardHeader>
                <Heading as="h2" size="md" textAlign="left">
                  {role.position}
                </Heading>
              </CardHeader>
              <CardBody className="card-body">
                <Flex gap={2} alignItems="center">
                  <Button
                    border="2px solid #1c5767"
                    borderRadius="10px"
                    padding="20px"
                    onClick={() => handleOpenUserModal(volunteer.user)}
                  >
                    <Avatar
                      size="sm"
                      name={
                        volunteer.user.id
                          ? `${volunteer.user.first_name} ${volunteer.user.last_name}`
                          : '?'
                      }
                    >
                      <AvatarBadge
                        borderColor="papayawhip"
                        bg={
                          // if volunteer.user.id is null, bg is red, if role.confirmed is false, bg is yellow, else bg is green
                          // confirmed pending declined
                          // eslint-disable-next-line no-nested-ternary
                          volunteer.user.id
                            ? role.confirmed
                              ? 'green.500'
                              : 'yellow.500'
                            : 'red.500'
                        }
                        boxSize="1.25em"
                      />
                    </Avatar>
                    <Box>
                      {volunteer.user.first_name} {volunteer.user.last_name}
                    </Box>
                  </Button>
                </Flex>
              </CardBody>
            </Card>
            <br />
          </SimpleGrid>
        )),
      )}
      <Button onClick={addRoleOnOpen}>Add Role</Button>
      <Modal isOpen={addRoleIsOpen} onClose={addRoleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Role</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input placeholder="name" size="md" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addRoleOnClose}>
              Close
            </Button>
            <Button variant="blue">Add Role</Button>
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

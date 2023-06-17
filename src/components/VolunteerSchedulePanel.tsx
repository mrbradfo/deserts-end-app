import {
  Box,
  Heading,
  Card,
  Button,
  Text,
  CardHeader,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Input,
  ModalFooter,
  Stack,
  useDisclosure,
  ModalBody,
} from '@chakra-ui/react';
import { VolunteerProps } from '../types';
import { addVolunteer } from '../api';

function VolunteerSchedulePanel({ volunteers, roles }: VolunteerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // define onClose to call api to add volunteer to role and close modal

  const handleAddVolunteer = () => {
    console.log('add volunteer');

    // addVolunteer({});

    onClose();
  };

  return (
    <Box maxW="1000px" m="auto">
      <Heading as="h1" size="lg" mb="4">
        Teams
      </Heading>
      {volunteers?.map((volunteer) => (
        <Card key={volunteer.user.id}>
          <CardHeader>
            <Avatar size="sm" name={volunteer.user.first_name} />
            <Text ml="2">{volunteer.user.first_name}</Text>
          </CardHeader>
        </Card>
      ))}
      <Button onClick={onOpen}>Add Volunteer</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Volunteer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input placeholder="name" size="md" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="blue" onClick={handleAddVolunteer}>
              Add Volunteer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default VolunteerSchedulePanel;

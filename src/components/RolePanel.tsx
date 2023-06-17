import {
  Accordion,
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
} from '@chakra-ui/react';
import { VolunteerProps } from '../types';

function RolePanel({ volunteers }: VolunteerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Accordion allowToggle>
        {volunteers?.map((volunteer) =>
          volunteer.roles.map((role) => (
            <SimpleGrid key={role.id} spacing={4} border="20px">
              <Card>
                <CardHeader>
                  <Heading as="h2" size="md" textAlign="left">
                    {role.position}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Avatar
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
                  {volunteer.user.first_name} {volunteer.user.last_name}
                </CardBody>
              </Card>
            </SimpleGrid>
          )),
        )}
      </Accordion>
      <Button onClick={onOpen}>Add Role</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="blue">Add Role</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default RolePanel;

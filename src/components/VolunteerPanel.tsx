import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
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
  Select,
} from '@chakra-ui/react';
import { VolunteerProps } from '../types';

function VolunteerPanel({ volunteers }: VolunteerProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Accordion allowToggle>
        {volunteers?.map((volunteer) => (
          <AccordionItem key={volunteer.user.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {volunteer.user.first_name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {volunteer.roles?.map((role) => (
                <div key={role.id}>{role.date}</div>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <Button onClick={onOpen}>Add Volunteer</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Volunteer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input placeholder="name" size="md" />
              <Select placeholder="Select team">
                <option value="propresenter">ProPresenter</option>
                <option value="sound">Sound</option>
                <option value="cm">Children&apos;s Ministry</option>
                <option value="coffee">Coffee</option>
              </Select>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="blue">Add Volunteer</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default VolunteerPanel;

import React, { useState } from 'react';

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
  console.log('volunteers:', volunteers);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // const [volunteers, setVolunteers] = useState([]);

  // useEffect(() => {
  //   const addVolunteer = async () => {
  //     try {
  //       const response = await handleAddVolunteer();
  //       setVolunteers(response.data);
  //     } catch (error) {
  //       console.error('Error adding volunteer:', error);
  //     }
  //   };

  //   addVolunteer();
  // }, []);

  // const handleAddVolunteer = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   onAddVolunteer(volunteerId);
  // };

  return (
    <>
      <Accordion allowToggle>
        {volunteers?.map((volunteer) => (
          <AccordionItem key={volunteer.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {volunteer.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {volunteer.schedule?.map((schedule) => (
                <div key={schedule.id}>{schedule.date.toDateString()}</div>
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

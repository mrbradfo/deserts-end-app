import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

function ManageSchedules() {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/')}>Back</Button>
      <Heading as="h1" size="lg" mb="4">
        Manage Schedules
      </Heading>
      <br />
    </>
  );
}

export default ManageSchedules;

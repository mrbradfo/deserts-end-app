import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function ManageSchedules() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Button onClick={() => navigate('/')}>Back</Button>
      <Heading as="h1" size="lg" mb="4">
        Manage Schedules
      </Heading>
      <br />
      <Footer />
    </>
  );
}

export default ManageSchedules;

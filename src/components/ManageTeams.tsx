/* eslint-disable no-nested-ternary */
import { Button, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import useUser from '../hooks/useUser';
import Header from './Header';
import Footer from './Footer';
import usePlansView from '../hooks/usePlanView';

function ManageTeams() {
  const navigate = useNavigate();
  const { user } = useUser(1);

  console.log('user', user);

  const { planView, isLoading, isError, isFetched } = usePlansView(1);
  console.log('planView', planView);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log('planView', planView);
  return (
    <>
      <Header />
      <Button onClick={() => navigate('/')}>Back</Button>
      <Heading as="h1" size="lg" mb="4">
        Sunday Template
      </Heading>
      <br />
      {planView?.plan?.teams.map((team) => (
        <div key={team.id}>
          <Heading as="h2" size="md" mb="4">
            {team.name}
          </Heading>

          {team.positions.map((position) => (
            <div key={position.id}>
              <div>
                {position.name} {position.capacity}
              </div>
              {position.volunteers.map((volunteer) => (
                <div key={volunteer.id}>
                  - {volunteer.user.first_name} {volunteer.user.last_name}
                </div>
              ))}
            </div>
          ))}
          <br />
        </div>
      ))}
      <br />

      <Footer />
    </>
  );
}

export default ManageTeams;

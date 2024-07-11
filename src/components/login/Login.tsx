import { Box, Button, Container, Stack } from '@chakra-ui/react';
import { OAuthButton } from './OAuthButtonGroup';

function Login() {
  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={{ base: 'transparent', sm: 'bg-surface' }}
          boxShadow={{ base: 'none', sm: 'md' }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Stack spacing="6">
            <Button variant="primary">Sign in</Button>
            <OAuthButton />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default Login;

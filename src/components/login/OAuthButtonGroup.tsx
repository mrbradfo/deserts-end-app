import { Box, VisuallyHidden } from '@chakra-ui/react';
import { SlackIcon } from './ProviderIcons';

const clientId = import.meta.env.VITE_APP_SLACK_CLIENT_ID;
const redirectURI = import.meta.env.VITE_APP_SLACK_REDIRECT_URI;

export const OAuthButton = () => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <VisuallyHidden>Sign in with Slack</VisuallyHidden>
    {SlackIcon(clientId, redirectURI)}
  </Box>
);

import { useQuery } from 'react-query';
import { get } from '../api';
import { User } from '../types';

const defaults = {
  enabled: true,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  refetchOnMount: false,
  staleTime: Infinity,
};
export default function useUser(userId: number, settings = defaults) {
  const { data: user, ...rest } = useQuery(
    'user',
    () => get<User>('user', userId),
    {
      ...defaults,
      ...settings,
    },
  );

  return { user, ...rest };
}

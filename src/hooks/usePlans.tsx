import { useQuery } from 'react-query';
import { getAll } from '../api';
import { Plan } from '../types';

const defaults = {
  enabled: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  refetchOnMount: false,
  staleTime: Infinity,
};
export default function usePlans(settings = defaults) {
  const { data: user, ...rest } = useQuery(
    'user',
    () => getAll<Plan[]>('plans'),
    {
      ...defaults,
      ...settings,
    },
  );

  return { user, ...rest };
}

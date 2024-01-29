import { useQuery } from 'react-query';
import { get } from '../api';
import { PlanView } from '../types';

const defaults = {
  enabled: true,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  refetchOnMount: false,
  staleTime: Infinity,
};

export default function usePlanView(id: number, settings = defaults) {
  const { data: planView, ...rest } = useQuery(
    'plans_view',
    () => get<PlanView>('plans_view', id),
    {
      ...defaults,
      ...settings,
    },
  );

  return { planView, ...rest };
}

import { queryOptions, useQuery } from '@tanstack/vue-query';

import { api } from '@/lib/api-client';
import type { QueryConfig } from '@/lib/vue-query';
import type { Discussion } from '@/types/api';

export const getDiscussions = (): Promise<Discussion[]> => {
  return api('/discussions');
};

export const getDiscussionsQueryOptions = () => {
  return queryOptions({
    queryKey: ['discussions'],
    queryFn: () => getDiscussions(),
  });
};

type UseDiscussionsOptions = {
  queryConfig?: QueryConfig<typeof getDiscussionsQueryOptions>;
};

export const useDiscussions = ({ queryConfig }: UseDiscussionsOptions = {}) => {
  return useQuery({
    ...getDiscussionsQueryOptions(),
    ...queryConfig,
  });
};

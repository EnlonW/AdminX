import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { Discussion } from '@/types/api';

import { getDiscussionsQueryOptions } from './get-discussions';
import type { MutationConfig } from '../vue-query';

export const createDiscussionInputSchema = z.object({
  title: z.string().min(1, 'Required'),
  body: z.string().min(1, 'Required'),
});

export type CreateDiscussionInput = z.infer<typeof createDiscussionInputSchema>;

export const createDiscussion = ({ data }: { data: CreateDiscussionInput }): Promise<Discussion> => {
  return api(`/discussions`, {
    body: data
  });
};

type Config = MutationConfig<typeof createDiscussion>

type UseCreateDiscussionOptions = {
  mutationConfig: Config
}


export const useCreateDiscussion = ({ mutationConfig }: UseCreateDiscussionOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig!;


  return useMutation({
    mutationFn: createDiscussion,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getDiscussionsQueryOptions().queryKey,
      });
      if (onSuccess) {
        onSuccess(...args);
      }
    },
    ...restConfig,
  });
};

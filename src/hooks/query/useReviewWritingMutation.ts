import { useMutation } from '@tanstack/react-query';

import { postReviewWriting } from '@/api';

export const useReviewWritingMutation = () => {
  const { mutate, status } = useMutation({
    mutationFn: postReviewWriting,
  });
  console.log('review writing', { mutate, status });
  return { mutate, status };
};

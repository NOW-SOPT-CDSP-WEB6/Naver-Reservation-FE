import { useMutation } from '@tanstack/react-query';

import { postReviewWriting } from '@/api';

export const useReviewWritingMutation = () => {
  const { mutate, status } = useMutation({
    mutationFn: postReviewWriting,
  });
  return { mutate, status};
}
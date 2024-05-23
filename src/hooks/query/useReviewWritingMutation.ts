import { postReviewWriting } from "@/api"
import { useMutation } from "@tanstack/react-query"

export const useReviewWritingMutation = () => {
  const { mutate, status } = useMutation({
    mutationFn: postReviewWriting,
  });
  return { mutate, status};
}
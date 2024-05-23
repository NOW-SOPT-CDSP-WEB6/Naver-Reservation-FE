import { postReviewWriting } from "@/api"
import { useMutation } from "@tanstack/react-query"

export const useReviewWritingMutation = () => {
  const { mutate, status } = useMutation({
    mutationFn: postReviewWriting,
  });
  console.log("review writing", {mutate, status});
  return { mutate, status};
}
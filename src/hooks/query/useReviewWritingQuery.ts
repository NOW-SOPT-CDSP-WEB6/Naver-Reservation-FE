import { postReviewWriting } from "@/api"
import { ReviewAPIType } from "@/type/reservation";
import { useMutation } from "@tanstack/react-query"

export const useReviewWritingQuery = ({reservationId, writing} : ReviewAPIType) => {
  console.log("api 호출한다", {writing})
  const mutation = useMutation({
    mutationFn: () => postReviewWriting({reservationId, writing}),
  });

  return mutation;
}
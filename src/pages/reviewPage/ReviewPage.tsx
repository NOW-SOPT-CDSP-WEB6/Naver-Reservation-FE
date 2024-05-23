import DragDrop from '@/pages/reviewPage/DragDrop/DragDrop';
import Header from '@/pages/reviewPage/Header/Header';
import ReviewWriting from '@/pages/reviewPage/ReviewWriting/ReviewWriting';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';
import { useReviewWritingQuery } from '@/hooks/query/useReviewWritingQuery';

const ReviewPage = () => {
  const handleNextClick = () => {
    useReviewWritingQuery({reservationId: 1, writing: "안녕"});
  }
  return (
    <>
      <Header />
      <DragDrop />
      <ReviewWriting />
      <BottomNavBtn handleNextClick={handleNextClick} />
    </>
  );
};

export default ReviewPage;

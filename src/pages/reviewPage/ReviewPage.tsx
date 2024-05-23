import DragDrop from '@/pages/reviewPage/DragDrop/DragDrop';
import Header from '@/pages/reviewPage/Header/Header';
import ReviewWriting from '@/pages/reviewPage/ReviewWriting/ReviewWriting';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';
import { useReviewWritingMutation } from '@/hooks/query/useReviewWritingMutation';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const ReviewPage = () => {
  const { mutate, status } = useReviewWritingMutation();
  const [text, setText] = useState('');
  const { reservationId = '' } = useParams();
  const navigate = useNavigate();

  const handleNextClick = () => {
    mutate({ reservationId: +reservationId, writing: text });
    if (status === 'success') {
      navigate(`/done/${reservationId}`);
    }
  }
  return (
    <>
      <Header />
      <DragDrop />
      <ReviewWriting text={text} setText={setText} />
      <BottomNavBtn handleNextClick={handleNextClick} />
    </>
  );
};

export default ReviewPage;

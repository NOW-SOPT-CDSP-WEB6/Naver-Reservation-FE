import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import DragDrop from '@/pages/reviewPage/DragDrop/DragDrop';
import Header from '@/pages/reviewPage/Header/Header';
import ReviewWriting from '@/pages/reviewPage/ReviewWriting/ReviewWriting';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';

import { useReviewWritingMutation } from '@/hooks/query/useReviewWritingMutation';

const ReviewPage = () => {
  const { mutate, status } = useReviewWritingMutation();
  const [text, setText] = useState('');
  const { reservationId = '' } = useParams();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { category, mainDescription, price, reservationDate, storeName } = state;


  const handleNextClick = () => {
    mutate({ reservationId: +reservationId, writing: text });

    navigate(`/done/${reservationId}`, {
      state,
    });
  };
  return (
    <>
      <Header storeName={storeName} reservationDate={reservationDate} mainDescription={mainDescription} price={price} />
      <DragDrop />
      <ReviewWriting text={text} setText={setText} />
      <BottomNavBtn handleNextClick={handleNextClick} />
    </>
  );
};

export default ReviewPage;

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Carousel from '@/pages/keywordPage/Carousel/Carousel';
import Header from '@/pages/keywordPage/Header/Header';
import LikeBox from '@/pages/keywordPage/LikeBox/LikeBox';
import TotalPrice from '@/pages/keywordPage/TotalPrice/TotalPrice';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';

const KeywordPage = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();

  const { state } = useLocation();
  const { category, mainDescription, price, reservationDate, storeName } = state;

  console.log(category, mainDescription, price, reservationDate, storeName);

  const handleNextClick = () => {
    navigate(`/review/${reservationId}`, {
      state,
    });
  };
  return (
    <>
      <Header />
      <TotalPrice />
      <Carousel />
      <LikeBox />
      <BottomNavBtn handleNextClick={handleNextClick} />
    </>
  );
};

export default KeywordPage;

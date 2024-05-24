import { useLocation, useNavigate, useParams } from 'react-router-dom';

import Carousel from '@/pages/keywordPage/Carousel/Carousel';
import Header from '@/pages/keywordPage/Header/Header';
import LikeBox from '@/pages/keywordPage/LikeBox/LikeBox';
import TotalPrice from '@/pages/keywordPage/TotalPrice/TotalPrice';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';
import Stepper from '@/components/@common/Stepper/Stepper';

const KeywordPage = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();

  const { state } = useLocation();

  const handleNextClick = () => {
    navigate(`/review/${reservationId}`, {
      state,
    });
  };
  return (
    <>
      <Stepper />
      <Header />
      <TotalPrice />
      <Carousel />
      <LikeBox />
      <BottomNavBtn handleNextClick={handleNextClick} />
    </>
  );
};

export default KeywordPage;

import Carousel from '@/pages/keywordPage/Carousel/Carousel';
import Header from '@/pages/keywordPage/Header/Header';
import LikeBox from '@/pages/keywordPage/LikeBox/LikeBox';
import TotalPrice from '@/pages/keywordPage/TotalPrice/TotalPrice';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';
import { useNavigate, useParams } from 'react-router-dom';

const KeywordPage = () => {
  const { reservationId } = useParams();
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate(`/review/${reservationId}`)
  }
  return (
    <>
      <Header />
      <TotalPrice />
      <Carousel />
      <LikeBox />
      <BottomNavBtn handleNextClick={handleNextClick}/>
    </>
  );
};

export default KeywordPage;

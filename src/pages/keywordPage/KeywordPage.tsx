import Carousel from '@/pages/keywordPage/Carousel/Carousel';
import Header from '@/pages/keywordPage/Header/Header';
import LikeBox from '@/pages/keywordPage/LikeBox/LikeBox';
import TotalPrice from '@/pages/keywordPage/TotalPrice/TotalPrice';

import BottomNavBtn from '@/components/@common/BottomNavBtn/BottomNavBtn';

const KeywordPage = () => {
  return (
    <>
      <Header />
      <TotalPrice />
      <Carousel />
      <LikeBox />
      <BottomNavBtn />
    </>
  );
};

export default KeywordPage;

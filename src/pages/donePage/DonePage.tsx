import { css } from '@emotion/react';

import { useParams } from 'react-router-dom';

import DoneHeader from '@/pages/donePage/DoneHeader/DoneHeader';
import ReviewList from '@/pages/donePage/ReviewBox/ReviewBox';
import TopBar from '@/pages/donePage/TopBar/TopBar';
import Stepper from '@/components/@common/Stepper/Stepper';

const DonePage = () => {
  return (
    <div css={DonePageStyle}>
      <TopBar />
      <Stepper />
      <DoneHeader />
      <ReviewList />
    </div>
  );
};

const DonePageStyle = css({
  background:
    'var(--grad_bg-grad_bg_Blue, linear-gradient(180deg, #287CFF -66.77%, #F0F0F3 13.28%, #F0F0F3 100%))',
});

export default DonePage;

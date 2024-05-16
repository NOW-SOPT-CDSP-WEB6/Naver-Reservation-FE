import BackIcon from '@assets/svgs/home/home_ic_back.svg?react';
import { css } from '@emotion/react';

import HomeMyPlaceBtn from '@/components/home/common/homeMyPlaceBtn/HomeMyPlaceBtn';

interface HomeTopBarProps {}

const HomeTopBar = ({}: HomeTopBarProps) => {
  return (
    <nav css={barStyle}>
      <BackIcon width={44} height={44} />
      <HomeMyPlaceBtn />
    </nav>
  );
};

export default HomeTopBar;

const barStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',

  paddingRight: '16px',
});

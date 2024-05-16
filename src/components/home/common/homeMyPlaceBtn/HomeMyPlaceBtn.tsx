import HomeImg from '@assets/svgs/home/home_ic_home.svg?react';
import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

interface HomeMyPlaceBtnProps {}

const HomeMyPlaceBtn = ({}: HomeMyPlaceBtnProps) => {
  return (
    <button css={buttonStyle}>
      <HomeImg width={16} height={16} />
      MY플레이스 홈
    </button>
  );
};

export default HomeMyPlaceBtn;

const buttonStyle = css({
  display: 'flex',
  alignItems: 'center',

  padding: '6px 12px',

  border: `1px solid ${Theme.color.border}`,
  borderRadius: '5px',
  backgroundColor: 'transparent',

  fontSize: Theme.text.medium.fontSize,
  lineHeight: Theme.text.medium.lineHeight,
});

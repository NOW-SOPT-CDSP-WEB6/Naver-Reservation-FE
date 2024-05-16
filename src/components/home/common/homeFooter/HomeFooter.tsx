import ArrowDown from '@assets/svgs/home/home_ic_down.svg?react';
import Globe from '@assets/svgs/home/home_ic_globe.svg?react';

import { ComponentPropsWithoutRef } from 'react';

import Text from '@/components/@common/Text/Text';
import {
  btnWrapperStyle,
  footerDetailStyle,
  footerNavStyle,
  footerStyle,
  selectStyle,
} from '@/components/home/common/homeFooter/HomeFooter.style';

import { MESSAGE } from '@/constants/message';

interface HomeFooterProps extends ComponentPropsWithoutRef<'footer'> {}

const HomeFooter = ({}: HomeFooterProps) => {
  return (
    <footer css={footerStyle}>
      <div css={btnWrapperStyle}>
        <button>예약/주문 스마트봇</button>
        <button>예약 소식 받기</button>
      </div>

      <div css={selectStyle}>
        <Globe /> 한국어 <ArrowDown />
      </div>

      <Text css={footerNavStyle}>로그아웃 ・ 전체 서비스 </Text>
      <span css={footerNavStyle}>
        네이버 예약 고객센터 ・ 이용약관 ・ <span>개인정보처리방침</span>
      </span>
      <Text css={footerDetailStyle}>{MESSAGE.FOOTER_DETAIL}</Text>
    </footer>
  );
};

export default HomeFooter;

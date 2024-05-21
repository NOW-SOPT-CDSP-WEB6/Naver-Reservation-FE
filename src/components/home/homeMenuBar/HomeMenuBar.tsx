import { css } from '@emotion/react';

import { ComponentPropsWithoutRef } from 'react';

import HomeMenu from '@/components/home/common/homeMenu/HomeMenu';
import HomeNotice from '@/components/home/common/homeNotice/HomeNotice';
import HomeTopBar from '@/components/home/common/homeTopBar/HomeTopBar';

import { Theme } from '@/styles/theme';

interface HomeMenuBarProps extends ComponentPropsWithoutRef<'section'> {}

const HomeMenuBar = ({}: HomeMenuBarProps) => {
  return (
    <section css={menuStyle}>
      <HomeTopBar />
      <HomeMenu>
        <HomeMenu.Item tabId="예약" selectedId="예약">
          예약
        </HomeMenu.Item>
        <HomeMenu.Item tabId="주문" selectedId="예약">
          주문
        </HomeMenu.Item>
      </HomeMenu>
      <HomeNotice>자동차검사도 네이버 예약에서! (한국교통안...</HomeNotice>
    </section>
  );
};

export default HomeMenuBar;

const menuStyle = css({
  width: '100%',

  backgroundColor: Theme.color.white,
});

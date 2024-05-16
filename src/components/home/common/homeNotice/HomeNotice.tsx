import LeftBtn from '@assets/svgs/home/home_ic_left.svg?react';

import { ReactNode } from 'react';

import Text from '@/components/@common/Text/Text';
import { barStyle, noticeTextStyle } from '@/components/home/common/homeNotice/HomeNotice.style';

interface HomeNoticeProps {
  children: ReactNode;
}

const HomeNotice = ({ children }: HomeNoticeProps) => {
  return (
    <section css={barStyle}>
      <LeftBtn width={20} height={20} />
      <Text css={noticeTextStyle}>공지</Text>
      <Text>{children}</Text>
      <LeftBtn width={20} height={20} />
    </section>
  );
};

export default HomeNotice;

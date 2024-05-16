import { HTMLAttributes } from 'react';

import { highlightStyle, textStyle } from '@/components/home/common/homeMyInfo/HomeMyInfo.style';

interface HomeMyInfoProps extends HTMLAttributes<HTMLParagraphElement> {
  totalCount?: number;
  totalExpense?: string | number;
}

const HomeMyInfo = ({ totalCount, totalExpense, ...props }: HomeMyInfoProps) => {
  return (
    <p css={textStyle} {...props}>
      최주용님은 <span css={highlightStyle}>{totalCount}</span>회 예약하셨고,{' '}
      <span css={highlightStyle}>{Number(totalExpense).toLocaleString()}</span>원 결제하셨어요.
    </p>
  );
};

export default HomeMyInfo;

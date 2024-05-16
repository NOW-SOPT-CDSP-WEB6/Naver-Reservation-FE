import { HTMLAttributes } from 'react';

import Text from '@/components/@common/Text/Text';
import {
  detailContainerStyle,
  timeDetailStyle,
} from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

import RightArrow from '@/assets/svgs/home/home_ic_right.svg?react';

interface HomeReservationCardDetailProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const HomeReservationCardDetail = ({ label, children }: HomeReservationCardDetailProps) => {
  return (
    <div css={detailContainerStyle}>
      <div css={timeDetailStyle}>
        <Text>{label}</Text>
        <RightArrow width={24} height={24} />
      </div>
      {children}
    </div>
  );
};

export default HomeReservationCardDetail;

import { css } from '@emotion/react';

import { HTMLAttributes } from 'react';

import Text from '@/components/@common/Text/Text';
import { detailStyle } from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

interface HomeReservationCardDetailContentProps extends HTMLAttributes<HTMLDivElement> {
  mainDescription: string;
  subDescription: string;
  price: string;
}

const HomeReservationCardDetailContent = ({
  mainDescription,
  subDescription,
  price,
}: HomeReservationCardDetailContentProps) => {
  return (
    <div css={detailStyle}>
      <Text
        css={css`
          float: inline-end;
        `}
      >
        {`${Number(price).toLocaleString()}원`}
      </Text>

      <Text size="large">{mainDescription}</Text>
      <Text size="medium">{subDescription}</Text>
    </div>
  );
};

export default HomeReservationCardDetailContent;

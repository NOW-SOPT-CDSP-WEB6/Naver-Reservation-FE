import { css } from '@emotion/react';

import { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

import Text from '@/components/@common/Text/Text';
import HomeCategoryChips from '@/components/home/common/homeCategoryChip/HomeCategoryChips';
import HomeReservationCardList from '@/components/home/common/homeReservationCard/HomeReservationCardList';

import UpArrow from '@/assets/svgs/home/home_ic_up.svg?react';

import { CHIPS } from '@/constants';

interface HomeReservationDetailProps extends ComponentPropsWithoutRef<'section'> {
  selectedChip?: string;
  onChipSelect?: (info: string) => void;
  detailsLength?: number;
  children: ReactNode;
}

const HomeReservationDetail = ({
  selectedChip,
  onChipSelect,
  children,
}: HomeReservationDetailProps) => {
  const cards = children as ReactElement[];

  return (
    <section css={containerStyle}>
      <div>
        <HomeCategoryChips>
          {CHIPS?.map((chip) => (
            <HomeCategoryChips.Item
              key={chip}
              status={chip}
              isSelected={selectedChip === chip}
              onClick={() => onChipSelect?.(chip)}
            />
          ))}
        </HomeCategoryChips>
      </div>
      <header css={detailHeaderStyle}>
        <Text>총 {cards?.length}건</Text>
        <Text size="medium">
          방문일자
          <UpArrow />
        </Text>
      </header>
      <HomeReservationCardList>{children}</HomeReservationCardList>
    </section>
  );
};

export default HomeReservationDetail;

const containerStyle = css({
  padding: '36px 20px',
});

export const detailHeaderStyle = css({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '24px 0px',

  '& > p:first-child': {
    fontSize: '20px',
  },

  '& > p:last-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
});

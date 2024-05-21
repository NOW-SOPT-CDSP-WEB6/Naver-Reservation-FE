import { css } from '@emotion/react';

import { ComponentPropsWithoutRef, ReactNode } from 'react';

import HomeCategoryChips from '@/components/home/common/homeCategoryChip/HomeCategoryChips';
import HomeReservationCardList from '@/components/home/common/homeReservationCard/HomeReservationCardList';

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
  return (
    <section css={containerStyle}>
      <div>
        <HomeCategoryChips>
          {CHIPS?.map((chip) => (
            <HomeCategoryChips.Item
              status={chip}
              isSelected={selectedChip === chip}
              onClick={() => onChipSelect?.(chip)}
            />
          ))}
        </HomeCategoryChips>
      </div>
      <HomeReservationCardList>{children}</HomeReservationCardList>
    </section>
  );
};

export default HomeReservationDetail;

const containerStyle = css({
  padding: '36px 20px',
});

import { useState } from 'react';

import CarouselCard from '@/pages/keywordPage/CarouselCard/CarouselCard';

import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';

import { BADGE_CATEGORY } from '@/constants/badge';

import * as s from './Carousel.style';

interface CarouselProps {
  category: string;
}

const Carousel = ({ category = '뷰티' }: CarouselProps) => {
  const [isFullBadge, setIsFullBadge] = useState<boolean>(false);

  return (
    <ContentBox
      variant="round"
      styles={{
        marginTop: '12px',
        padding: `26px 0 ${isFullBadge ? '42px' : 0} 20px`,
      }}
    >
      <header css={s.header}>
        <div css={s.title}>어떤 점이 좋았나요?</div>
        <div css={s.tag}>필수</div>
      </header>
      <Text size="medium" css={s.detail}>
        이 가게에 어울리는 키워드를 골라주세요.(1개~5개)
      </Text>
      <section css={s.carouselWrapper}>
        {BADGE_CATEGORY[category]?.map((badge) => {
          return (
            <CarouselCard
              badgeTitle={badge}
              isFullBadge={isFullBadge}
              setIsFullBadge={setIsFullBadge}
            />
          );
        })}
      </section>
    </ContentBox>
  );
};

export default Carousel;

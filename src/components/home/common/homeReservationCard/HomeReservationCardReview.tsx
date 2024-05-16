import { HTMLAttributes } from 'react';

import Button from '@/components/@common/Button/Button';
import Text from '@/components/@common/Text/Text';
import { reviewStatusWrapperStyle } from '@/components/home/common/homeReservationCard/HomeReservationCard.style';

import Write from '@/assets/svgs/home/home_btn_write.svg?react';

interface HomeReservationCardReviewProps extends HTMLAttributes<HTMLDivElement> {
  review?: boolean;
}

const HomeReservationCardReview = ({ review = false }: HomeReservationCardReviewProps) => {
  return (
    <div css={reviewStatusWrapperStyle(review)}>
      <Button variant="review">
        <Write />
        리뷰 쓰기
      </Button>
      <Text size="small">
        리뷰 작성 기한이 <span>29일</span> 남았어요 !
      </Text>
    </div>
  );
};

export default HomeReservationCardReview;

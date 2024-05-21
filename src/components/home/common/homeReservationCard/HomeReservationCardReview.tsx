import { css } from '@emotion/react';

import { HTMLAttributes } from 'react';

import Button from '@/components/@common/Button/Button';
import Text from '@/components/@common/Text/Text';

import Write from '@/assets/svgs/home/home_btn_write.svg?react';

import { Theme } from '@/styles/theme';

interface HomeReservationCardReviewProps extends HTMLAttributes<HTMLDivElement> {
  review?: boolean;
  onReview?: () => void;
}

const HomeReservationCardReview = ({
  review = false,
  onReview,
}: HomeReservationCardReviewProps) => {
  return (
    review && (
      <>
        <Button onClick={onReview} variant="review">
          <Write />
          리뷰 쓰기
        </Button>
        <Text css={reviewStatusText} size="small">
          리뷰 작성 기한이 <span>29일</span> 남았어요 !
        </Text>
      </>
    )
  );
};

export default HomeReservationCardReview;

const reviewStatusText = css({
  marginTop: '6px',

  color: Theme.color.naverBlue,

  textAlign: 'center',
});

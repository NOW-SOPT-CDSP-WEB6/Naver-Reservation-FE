import { alignCenter, blueHighlight } from '@/pages/donePage/DoneHeader/DoneHeader.style';
import {
  RateWrapper,
  SlideWrapper,
  StarIcon,
  TextSpace,
  mediumTextColor,
} from '@/pages/donePage/ReviewBox/ReviewBox.style';
import ReviewContents from '@/pages/donePage/ReviewContents/ReviewContents';

import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';
import Title from '@/components/@common/Title/Title';

import StarImg from '@/assets/svgs/done/done_ic_star_red.svg?react';

const ReviewList = () => {
  return (
    <ContentBox
      variant="round"
      styles={{
        width: '343px',
        height: '322px',
        margin: '16px',
        paddingTop: '30px',
        paddingBottom: '44px',
      }}
    >
      <Title size={'medium'}>
        <span css={alignCenter}>
          이 장소를 다녀간 <span css={blueHighlight}>리뷰어</span>는?
        </span>
      </Title>
      <p css={RateWrapper}>
        <StarImg css={StarIcon} />
        <Title size={'small'} css={TextSpace}>
          4.35
        </Title>
        <Text size={'large'} css={mediumTextColor}>
          995개 평점 (769명)
        </Text>
      </p>
      <div css={SlideWrapper}>
        <ReviewContents />
        <ReviewContents />
      </div>
    </ContentBox>
  );
};

export default ReviewList;

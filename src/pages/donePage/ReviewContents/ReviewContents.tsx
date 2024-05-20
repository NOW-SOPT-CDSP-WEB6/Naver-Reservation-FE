import { SlideWrapper } from '@/pages/donePage/ReviewBox/ReviewBox.style';
import {
  AlignCenter,
  ReviewDetail,
  ReviewImg,
  ReviewText,
} from '@/pages/donePage/ReviewContents/ReviewContents.style';
import { ImageStyle, TextColor } from '@/pages/donePage/ReviewContents/ReviewContents.style';

import Badge from '@/components/@common/Badge/Badge';
import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';

import ProfImg from '@/assets/svgs/done/prof_img.svg?react';
import DetailImg from '@/assets/svgs/done/review_img.svg?react';

import { Theme } from '@/styles/theme';

const ReviewContents = () => {
  return (
    <>
      <ContentBox
        styles={{
          width: '240px',
          height: '173px',
          borderRadius: '13px',
          border: `1px solid ${Theme.color.border}`,
          marginLeft: '20px',
          paddingLeft: '12px',
          paddingRight: '12px',
          backgroundColor: Theme.color.white,
        }}
      >
        <section css={ReviewDetail}>
          <ProfImg css={ImageStyle}></ProfImg>
          <div>
            <Text size={'medium'}>하윙</Text>
            <Text size={'small'} css={TextColor}>
              3.8.금•리뷰 1062
            </Text>
          </div>
        </section>
        <section css={SlideWrapper}>
          <div css={AlignCenter}>
            <Text size={'medium'} css={ReviewText}>
              <p>좋아요굿이에요좋아요굿이요좋아요굿이요좋아요</p>
            </Text>
            <DetailImg css={ReviewImg}></DetailImg>
          </div>
        </section>

        <Badge size="small">
          <span>친절해요💓</span>
        </Badge>
      </ContentBox>
    </>
  );
};

export default ReviewContents;

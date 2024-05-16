import {
  AlignCenter,
  BadgeAlign,
  ReviewDetail,
  ReviewImg,
  ReviewText,
} from '@/pages/donePage/ReviewContents/ReviewContents.style';
import { ImageStyle, TextColor } from '@/pages/donePage/ReviewContents/ReviewContents.style';

import Badge from '@/components/@common/Badge/Badge';
import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';
import Title from '@/components/@common/Title/Title';

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
        }}
      >
        <section css={ReviewDetail}>
          <img css={ImageStyle}></img>
          <div>
            <Text size={'medium'}>하윙</Text>
            <Text size={'small'} css={TextColor}>
              3.8.금•리뷰 1062
            </Text>
          </div>
        </section>
        <div css={AlignCenter}>
          <Text size={'medium'} css={ReviewText}>
            좋아요굿이에요좋아요굿이요좋아요굿이요좋아요
          </Text>
          <img css={ReviewImg}></img>
        </div>
        <Badge size="small">
          <span>친절해요💓</span>
        </Badge>
      </ContentBox>
    </>
  );
};

export default ReviewContents;

import { SlideWrapper } from '@/pages/donePage/ReviewBox/ReviewBox.style';
import {
  AlignCenter,
  AlignRow,
  ReviewDetail,
  ReviewImg,
  ReviewText,
} from '@/pages/donePage/ReviewContents/ReviewContents.style';
import { ImageStyle, TextColor } from '@/pages/donePage/ReviewContents/ReviewContents.style';

import Badge from '@/components/@common/Badge/Badge';
import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';

import DoneImg from '@/assets/svgs/done/done_img.svg?react';

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
          <DoneImg css={ImageStyle} width={40} height={40}></DoneImg>
          <div css={AlignCenter}>
            <Text size={'medium'}>하윙</Text>
            <Text size={'small'} css={TextColor}>
              3.8.금•리뷰 1062
            </Text>
          </div>
        </section>
        <section css={SlideWrapper}>
          <div css={AlignRow}>
            <Text size={'medium'} css={ReviewText}>
              <p>좋아요굿이에요좋아요굿이요좋아요굿이요좋아요</p>
            </Text>
            <DoneImg width={48} height={48} css={ReviewImg}></DoneImg>
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

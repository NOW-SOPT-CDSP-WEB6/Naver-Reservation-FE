import { useParams } from 'react-router-dom';

import { SlideWrapper } from '@/pages/donePage/ReviewBox/ReviewBox.style';
import {
  AlignCenter,
  AlignRow,
  ReviewDetail,
  ReviewText,
  TextColor,
} from '@/pages/donePage/ReviewContents/ReviewContents.style';
import { ImageStyle } from '@/pages/donePage/ReviewContents/ReviewContents.style';
import { ReviewImg } from '@/pages/donePage/ReviewContents/ReviewContents.style';

import Badge from '@/components/@common/Badge/Badge';
import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';

import { useReviewsInfoQuery } from '@/hooks/reservation/useReviewsInfo';

import DoneImg from '@/assets/svgs/done/done_img.svg?react';

import { Theme } from '@/styles/theme';

const ReviewContents = () => {
  const { reservationId } = useParams();
  const ReviewInfo = useReviewsInfoQuery(+(reservationId || 0));
  console.log('데이터 : ', ReviewInfo);
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
            <Text size={'medium'}>{ReviewInfo?.data.userReviewList.map((item) => item.name)}</Text>
            <Text size={'small'} css={TextColor}>
              {ReviewInfo?.data.userReviewList.map((item) => item.reviewDate)}
            </Text>
          </div>
        </section>
        <section css={SlideWrapper}>
          <div css={AlignRow}>
            <Text size={'medium'} css={ReviewText}>
              <p>{ReviewInfo?.data.userReviewList.map((item) => item.content)}</p>
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

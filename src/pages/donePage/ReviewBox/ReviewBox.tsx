import { alignCenter, blueHighlight } from '@/pages/donePage/DoneHeader/DoneHeader.style';
import PlaceList from '@/pages/donePage/Place/Place';
import MoreReview from '@/pages/donePage/ReviewBox/MoreReviewBox';
import { DetailTitle } from '@/pages/donePage/ReviewBox/MoreReviewBox.style';
import { DetailDate } from '@/pages/donePage/ReviewBox/MoreReviewBox.style';
import { DoneBtnStyle } from '@/pages/donePage/ReviewBox/MoreReviewBox.style';
import { Wrapper } from '@/pages/donePage/ReviewBox/MoreReviewBox.style';
import {
  AlignRow,
  ButtonStyle,
  MemoIconStyle,
  NextbtnStyled,
  RateWrapper,
  RecentPlaceTitle,
  SlideWrapper,
  StarIcon,
  TextBox,
  TextSpace,
  mediumTextColor,
} from '@/pages/donePage/ReviewBox/ReviewBox.style';
import ReviewContents from '@/pages/donePage/ReviewContents/ReviewContents';

import Button from '@/components/@common/Button/Button';
import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';
import Title from '@/components/@common/Title/Title';

import DoneBtn from '@/assets/svgs/done/done_btn_x.svg?react';
import StarImg from '@/assets/svgs/done/done_ic_star_red.svg?react';
import MemoIcon from '@/assets/svgs/done/memo.svg?react';
import NextBtn from '@/assets/svgs/done/review_ic_next.svg?react';

const ReviewList = () => {
  return (
    <>
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
      <ContentBox
        variant="round"
        styles={{
          width: '344px',
          height: '309px',
          margin: '12px',
          paddingBottom: '21px',
        }}
      >
        <div css={AlignRow}>
          <Title size="medium" css={RecentPlaceTitle}>
            내가 최근에 저장한 장소
          </Title>
          <NextBtn css={NextbtnStyled} width={40} height={40}></NextBtn>
        </div>
        <PlaceList />
      </ContentBox>
      <ContentBox
        variant="round"
        styles={{
          width: '344px',
          height: '261px',
          borderRadius: '15px',
          marginBottom: '12px',
          paddingTop: '30px',
        }}
      >
        <Title size={'medium'}>
          <span css={alignCenter}>
            이어서 <span css={blueHighlight}>리뷰</span> 더 써볼까요?
          </span>
        </Title>

        <section css={Wrapper}>
          <MoreReview>
            <Text size="medium" css={DetailTitle}>
              방문한 다른 장소가 있나요?
            </Text>
          </MoreReview>
          <MoreReview>
            <DoneBtn css={DoneBtnStyle} width={22} height={22} />
            <Text size="medium" css={DetailTitle}>
              르메인호텔 협재
            </Text>
            <p css={DetailDate}>5일 전 방문</p>
          </MoreReview>
        </section>
      </ContentBox>
      <ContentBox
        variant="round"
        styles={{
          width: '344px',
          height: '88px',
          borderRadius: '15px',
          marginBottom: '12px',
          display: 'flex',
        }}
      >
        <MemoIcon width={26} height={26} css={MemoIconStyle}></MemoIcon>
        <div css={TextBox}>
          <Text size="small">새로워진 리뷰쓰기 페이지 어땠나요?</Text>
          <Title size="medium">의견을 들려주세요!</Title>
        </div>

        <NextBtn css={NextbtnStyled} width={40} height={40}></NextBtn>
      </ContentBox>
      <div css={ButtonStyle}>
        <Button variant="look" size="large">
          방금 쓴 리뷰 보러가기
        </Button>
      </div>
    </>
  );
};

export default ReviewList;

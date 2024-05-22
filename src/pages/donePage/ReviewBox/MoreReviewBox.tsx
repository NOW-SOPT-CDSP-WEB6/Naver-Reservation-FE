import { HTMLAttributes } from 'react';

import {
  DetailDate,
  DetailTitle,
  DoneBtnStyle,
  Wrapper,
  WriteReview,
} from '@/pages/donePage/ReviewBox/MoreReviewBox.style';

import Button from '@/components/@common/Button/Button';
import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';

import DoneBtn from '@/assets/svgs/done/done_btn_x.svg?react';
import WriteBtn from '@/assets/svgs/done/home_ic_pen.svg?react';

import { Theme } from '@/styles/theme';

interface ReviewProps extends HTMLAttributes<HTMLAllCollection> {
  children: React.ReactNode;
}

const MoreReview = (props: ReviewProps) => {
  const { children } = props;
  return (
    <ContentBox
      styles={{
        width: '129px',
        height: '146px',
        border: `1px solid ${Theme.color.lightGray}`,
        borderRadius: '13px',
        boxShadow: '1px 1px 6px 0px rgba(0, 0, 0, 0.05)',
        marginRight: '10px',
        padding: '20px 16px 12px 12px',
      }}
    >
      {children}
      <button css={WriteReview}>
        <WriteBtn width={18} height={18} />
        리뷰 쓰기
      </button>
    </ContentBox>
  );
};

export default MoreReview;

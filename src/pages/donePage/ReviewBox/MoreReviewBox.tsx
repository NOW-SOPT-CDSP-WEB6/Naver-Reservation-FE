import DoneBtn from '@assets/svgs/done/done_btn_x.svg?react';

import { HTMLAttributes } from 'react';

import {
  DoneBtnStyle,
  WriteReview,
  boxStyle,
} from '@/pages/donePage/ReviewBox/MoreReviewBox.style';

import Button from '@/components/@common/Button/Button';

import WriteBtn from '@/assets/svgs/done/home_ic_pen.svg?react';

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MoreReview = (props: ReviewProps) => {
  const { children } = props;
  return (
    <div css={boxStyle}>
      <DoneBtn width={18} height={18} css={DoneBtnStyle} />
      {children}
      <Button variant={'review'} icon={<WriteBtn />} css={WriteReview}>
        리뷰 쓰기
      </Button>
    </div>
  );
};

export default MoreReview;

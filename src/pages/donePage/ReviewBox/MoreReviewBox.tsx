import { HTMLAttributes } from 'react';

import { DoneBtnStyle, WriteReview } from '@/pages/donePage/ReviewBox/MoreReviewBox.style';
import { AlignCenter } from '@/pages/donePage/ReviewContents/ReviewContents.style';
import { boxStyle } from '@/pages/homePage/HomePage.style';

import Button from '@/components/@common/Button/Button';
import Text from '@/components/@common/Text/Text';

import DoneBtn from '@/assets/svgs/done/done_btn_x.svg?react';
import WriteBtn from '@/assets/svgs/done/home_ic_pen.svg?react';

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MoreReview = (props: ReviewProps) => {
  const { children } = props;
  return (
    <div css={boxStyle}>
      <DoneBtn width={22} height={22} css={DoneBtnStyle} />
      {children}
      <div css={AlignCenter}>
        <Button variant={'review'} icon={<WriteBtn />} css={WriteReview}>
          <Text size="small">리뷰 쓰기</Text>
        </Button>
      </div>
    </div>
  );
};

export default MoreReview;

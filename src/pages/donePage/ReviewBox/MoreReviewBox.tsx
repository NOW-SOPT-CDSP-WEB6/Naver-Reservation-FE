import { HTMLAttributes } from 'react';

import Button from '@/components/@common/Button/Button';
import ContentBox from '@/components/@common/ContentBox/ContentBox';

import DoneBtn from '@/assets/svgs/done/done_btn_x.svg?react';
import WriteBtn from '@/assets/svgs/done/home_ic_pen.svg?react';

import { Theme } from '@/styles/theme';

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const MoreReview = (props: ReviewProps) => {
  const { children } = props;
  return (
    <ContentBox
      {...props}
      styles={{
        border: `1px solid ${Theme.color.lightGray}`,
        borderRadius: '13px',
        boxShadow: '1px 1px 6px 0px rgba(0, 0, 0, 0.05)',
        padding: '16px',
      }}
    >
      <DoneBtn />
      {children}
      <Button variant={'review'} icon={<WriteBtn width={18} height={18} />}>
        리뷰 쓰기
      </Button>
    </ContentBox>
  );
};

export default MoreReview;

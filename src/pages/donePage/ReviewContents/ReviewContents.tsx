import { SlideWrapper } from '@/pages/donePage/ReviewBox/ReviewBox.style';
import {
  AlignCenter,
  AlignRow,
  ImageStyle,
  ReviewDetail,
  ReviewImg,
  ReviewText,
  TextColor,
} from '@/pages/donePage/ReviewContents/ReviewContents.style';

import Badge from '@/components/@common/Badge/Badge';
import ContentBox from '@/components/@common/ContentBox/ContentBox';

import { Theme } from '@/styles/theme';

interface ReviewContentsProps extends HTMLAttributes<HTMLAllCollection> {
  children: React.ReactNode;
}

const ReviewContents = (props: ReviewContentsProps) => {
  const { children } = props;

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
        {children}
        <Badge size="small">
          <span>친절해요💓</span>
        </Badge>
      </ContentBox>
    </>
  );
};

export default ReviewContents;

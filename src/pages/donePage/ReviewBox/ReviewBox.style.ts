import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

const mediumTextColor = css({
  color: Theme.color.mediumGray,
  display: 'flex',
  alignItems: 'center',
});

const RateWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '17px',
  marginBottom: '15px',
});

const TextSpace = css({
  marginLeft: '2px',
  marginRight: '4px',
});

const StarIcon = css({
  width: '20px',
  height: '20px',
});

const SlideWrapper = css({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const AlignRow = css({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: '21px',
});

const NextbtnStyled = css({
  marginTop: '22px',
  display: 'flex',
  justifyContent: 'flex-end',
});

const RecentPlaceTitle = css({
  width: '200px',
  marginTop: '30px',
  marginRight: '95px',
  textAlign: 'center',
});

const MemoIconStyle = css({
  margin: '28px',
  marginLeft: '36px',
});

const TextBox = css({
  margin: '21px 0px',
  marginRight: '40px',
});

const ButtonStyle = css({
  paddingLeft: '15px',
  paddingRight: '15px',
});

export {
  mediumTextColor,
  RateWrapper,
  TextSpace,
  StarIcon,
  SlideWrapper,
  AlignRow,
  NextbtnStyled,
  RecentPlaceTitle,
  MemoIconStyle,
  TextBox,
  ButtonStyle,
};

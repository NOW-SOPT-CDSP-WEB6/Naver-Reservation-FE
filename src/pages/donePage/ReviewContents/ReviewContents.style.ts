import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const ImageStyle = css({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  marginRight: '12px',
  marginLeft: '0px',
});

export const TextColor = css({
  color: Theme.color.mediumGray,
  marginTop: '5px',
});

export const ReviewDetail = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  marginTop: '16px',

  marginBottom: '10px',
});
export const AlignCenter = css({
  display: 'flex',
  flexDirection: 'row',
});

export const ReviewText = css({
  width: '146px',
  height: '60px',
});

export const ReviewImg = css({
  width: '48px',
  height: '48px',
  marginLeft: '22px',
  marginBottom: '12px',
});

export const BadgeAlign = css({
  marginTop: '6px',

  marginBottom: '21px',
});

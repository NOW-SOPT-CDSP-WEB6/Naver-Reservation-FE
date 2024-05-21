import { css } from '@emotion/react';

import Img from '@/assets/svgs/done/done_img.svg';

import { Theme } from '@/styles/theme';

export const AlignRow = css({
  display: 'flex',
});

export const FavIconStyle = css({
  marginRight: '3px',
});

export const PlaceStyle = css({
  width: '148px',
  height: '186px',
  borderRadius: '18px',
  marginBottom: '10px',
  backgroundImage: `url(${Img})`,
  objectFit: 'contain',
  marginTop: '15px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const Address = css({
  color: Theme.color.white,
  paddingTop: '140px',
  paddingLeft: '15px',
});

export const Name = css({
  color: Theme.color.white,
  paddingLeft: '15px',
  paddingTop: '3px',
});

export const CafeText = css({
  textAlign: 'center',
  color: Theme.color.darkgray,
});

export const Wrapper = css({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '17px',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

import { css } from '@emotion/react';

import Img1 from '@/assets/img/done_img_1.png';
import Img2 from '@/assets/img/done_img_2.png';

import { Theme } from '@/styles/theme';

export const AlignRow = css({
  display: 'flex',
});

export const FavIconStyle = css({
  marginRight: '3px',
});

export const PlaceStyle1 = css({
  width: '148px',
  height: '186px',
  marginTop: '15px',
  marginBottom: '10px',
  borderRadius: '18px',
  objectFit: 'contain',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${Img1})`,
});

export const PlaceStyle2 = css({
  width: '148px',
  height: '186px',
  marginTop: '15px',
  marginBottom: '10px',
  borderRadius: '18px',
  objectFit: 'contain',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${Img2})`,
});

export const PlaceStyle3 = css({
  width: '148px',
  height: '186px',
  marginTop: '15px',
  marginBottom: '10px',
  borderRadius: '18px',
  objectFit: 'contain',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(${Img1})`,
});

export const Address = css({
  paddingTop: '140px',
  paddingLeft: '15px',
  color: Theme.color.white,
});

export const Name = css({
  paddingLeft: '15px',
  paddingTop: '3px',
  color: Theme.color.white,
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

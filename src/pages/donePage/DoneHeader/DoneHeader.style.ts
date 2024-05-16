import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const HeaderWrapper = css({
  width: '255px',
  height: '60px',
  margin: '35px 60px',
  flexShrink: '0',
});

export const alignCenter = css({
  display: 'flex',
  justifyContent: 'center',
});

export const blueHighlight = css({
  color: Theme.color.naverBlue,
  margin: '0px 4px',
});

export const topDetail = css({
  color: Theme.color.darkgray,
  marginTop: '9px',
});

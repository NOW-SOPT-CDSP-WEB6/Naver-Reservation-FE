import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const boxStyle = css({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  width: '343px',
  height: '100%',
  backgroundColor: Theme.color.white,
});

export const boxShadow = {
  none: css({
    boxShadow: 'none',
  }),
  show: css({
    boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.10)',
  }),
};

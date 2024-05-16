import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const itemStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '15px 0px',

  width: '100%',
  position: 'relative',
});

export const mainTextStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
  flex: 2,

  paddingLeft: '20px',
});

export const statusbarStyle = css({
  appearance: 'none',
  position: 'absolute',
  width: '100%',
  height: '1px',

  bottom: 0,

  '&::-webkit-progress-bar': {
    background: Theme.color.border,
  },

  '&::-webkit-progress-value': {
    background: Theme.color.black,
  },
});

export const rankNumberStyle = css({
  padding: '5px 9px',

  border: `1px solid ${Theme.color.border}`,
  borderRadius: '7px',

  fontSize: Theme.text.small.fontSize,
  lineHeight: Theme.text.small.lineHeight,
});

import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const barStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '12px 18px',
});

export const noticeTextStyle = css({
  fontSize: Theme.text.medium.fontSize,
  lineHeight: Theme.text.medium.lineHeight,

  fontWeight: 600,
});

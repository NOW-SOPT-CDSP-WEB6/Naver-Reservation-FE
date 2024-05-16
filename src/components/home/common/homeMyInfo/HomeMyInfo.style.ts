import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const textStyle = css({
  padding: '12px 16px',

  fontSize: '20px',
  lineHeight: 'normal',

  fontWeight: 400,
});

export const highlightStyle = css({
  fontSize: '20px',
  color: Theme.color.naverBlue,
});

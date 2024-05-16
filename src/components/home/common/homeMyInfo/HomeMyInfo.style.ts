import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const textStyle = css({
  padding: '12px 16px',

  fontSize: Theme.title.medium.fontSize,
  lineHeight: 'normal',

  fontWeight: 400,
});

export const highlightStyle = css({
  fontSize: Theme.title.medium.fontSize,
  color: Theme.color.naverBlue,
});

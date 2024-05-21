import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const wrapper = css({
  padding: '28px 20px 35px 20px',
});

export const detail = css({
  display: 'flex',
  justifyContent: 'space-between',

  color: Theme.color.darkgray,

  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '19.6px',
});

export const vector = css({
  width: '302px',
  margin: '9px 0 5px 0',

  border: '',
  borderTop: `1px solid ${Theme.color.border}`,
});

export const total = css({
  display: 'flex',
  justifyContent: 'space-between',

  fontSize: '14px',
  fontWeight: '600',
});

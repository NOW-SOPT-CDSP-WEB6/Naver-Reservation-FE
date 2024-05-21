import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',

  width: '100%',
  height: '100%',
  padding: '26px 65px',

  fontSize: '18px',
  fontWeight: '600',
});

export const title = css({
  paddingBottom: '8px',
});

export const detail = css({
  paddingBottom: '18px',
  color: Theme.color.mediumGray,
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '19.6px',
});

import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const menuStyle = css({
  display: 'flex',
  justifyContent: 'space-between',

  width: '100%',

  padding: '0px 46px 1px 46px',

  borderBottom: `1px solid ${Theme.color.border}`,
});

export const menuItemStyle = css({
  position: 'relative',

  padding: '18px 44px',

  fontSize: Theme.text.large.fontSize,
  lineHeight: Theme.text.large.lineHeight,

  fontWeight: 600,
});

export const indicatorStyle = css({
  position: 'absolute',
  width: '80%',
  height: '3px',
  backgroundColor: Theme.color.black,
  bottom: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
  borderRadius: '1.5px',
});

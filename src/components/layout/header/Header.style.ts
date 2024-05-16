import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',

  padding: '12px 21px',

  backgroundColor: Theme.color.white,

  '& > p': {
    padding: '3px 12px',
  },
});

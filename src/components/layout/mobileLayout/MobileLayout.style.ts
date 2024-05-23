import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '375px',
  minHeight: '100vh',

  '& > main': {
    width: '100%',
  },

  backgroundColor: Theme.color.background1,

});

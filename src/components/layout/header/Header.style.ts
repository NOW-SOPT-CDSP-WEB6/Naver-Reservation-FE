import { css } from '@emotion/react';

export const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '12px 21px',

  width: '100%',

  '& > p': {
    padding: '3px 12px',
  },
});

import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const btnStyle = css({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',

  width: '100%',
  height: '100%',

  padding: '10px 44px',

  borderRadius: '8px',
  borderWidth: '0',
});

export const btnVariant = {
  next: css({
    color: 'white',
    backgroundColor: Theme.color.naverBlue,
  }),

    review: css({
        color: Theme.color.darkgray,
        backgroundColor: Theme.color.lightGray
    }),

  look: css({
    color: 'white',
    backgroundColor: Theme.color.naverBlue,
  }),
};

export const btnSize = {
  small: css({
    fontSize: '12px',
  }),

  medium: css({
    fontSize: '14px',
  }),

  large: css({
    fontSize: '16px',
  }),
};

import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const btnStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',

  width: '100%',

  padding: '10px 44px',

  borderRadius: '8px',
  borderWidth: '0',

  cursor: 'pointer',
});

export const btnVariant = {
  next: css({
    color: 'white',
    backgroundColor: Theme.color.naverBlue,
  }),

  review: css({
    color: Theme.color.darkgray,
    border: `1px solid ${Theme.color.border}`,
    backgroundColor: Theme.color.lightGray,
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

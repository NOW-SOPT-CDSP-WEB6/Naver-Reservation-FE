import { Theme } from '@/styles/theme';
import { css } from '@emotion/react';

export const badgeStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'fit-content',
});

export const customStyle = {
  default: css({
    padding: '6px 14px',

    borderRadius: '6px',
    border: `1px solid ${Theme.color.border}`,
    backgroundColor: Theme.color.white,

    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '19.6px',
  }),

  small: css({
    padding: '3px 9px',

    borderRadius: '2px',
    color: Theme.color.darkgray,
    backgroundColor: Theme.color.background2,

    fontSize: '12px',
    fontWeight: '500',
  }),
};

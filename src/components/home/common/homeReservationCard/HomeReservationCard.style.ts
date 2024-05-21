import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const titleWrapperStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px 0px',

  '& > header': {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',

    padding: '0px 12px',
    flex: 3,

    '& > h5': {
      fontSize: '18px',
    },

    '& > p': {
      color: Theme.color.mediumGray,
    },
  },

  '& > button': {
    border: 'none',
    backgroundColor: 'transparent',
  },
});

export const iconStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignitems: 'center',
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  backgroundColor: `${Theme.color.naverBlue}`,
});

export const timeDetailStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px dashed ${Theme.color.border}`,
  padding: '12px 0px',

  '& > p': {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    textDecorationColor: Theme.color.naverRightGreen,
    textDecorationThickness: '6px',
  },
});

export const detailStyle = css({
  padding: '20px 0px',

  '& > p:last-child': {
    width: '60%',
    color: Theme.color.darkgray,
  },

  '& > p:nth-child(1)': {
    color: Theme.color.mediumGray,
  },

  '& > p:nth-child(2)': {
    width: '75%',
  },
});

export const reviewStatusWrapperStyle = (isReviewed: boolean) =>
  css({
    display: isReviewed ? 'none' : 'flex',

    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',

    '& span': {
      color: Theme.color.naverBlue,
    },
  });

export const detailContainerStyle = css({
  width: '100%',
  backgroundColor: Theme.color.white,
  borderRadius: Theme.borderRadius.medium,
  padding: '12px 26px',
});

export const detailHeaderStyle = css({
  display: 'flex',
  justifyContent: 'space-between',

  padding: '24px 0px',

  '& > p:first-child': {
    fontSize: '20px',
  },

  '& > p:last-child': {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
});

export const listStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

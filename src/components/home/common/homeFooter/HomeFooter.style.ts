import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const footerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',

  padding: '24px',

  backgroundColor: Theme.color.background2,
});

export const btnWrapperStyle = css({
  whiteSpace: 'nowrap',

  '& > button': {
    width: '170px',
    height: '44px',

    border: 'none',
    backgroundColor: Theme.color.white,
  },

  '& > button:first-child': {
    borderTopLeftRadius: '9px',
    borderBottomLeftRadius: '9px',
  },

  '& > button:last-child': {
    borderTopRightRadius: '9px',
    borderBottomRightRadius: '9px',
  },
});

export const selectStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '4px 8px',

  marginTop: '24px',

  color: Theme.color.darkgray,
  fontSize: Theme.text.small.fontSize,
  lineHeight: Theme.text.small.lineHeight,
});

export const footerNavStyle = css({
  fontSize: Theme.text.medium.fontSize,
  fontWeight: '400',
  color: Theme.color.mediumGray,

  margin: '6px 0px 4px 0px',

  '& > span': {
    display: 'inline',
    fontWeight: '600',
  },
});

export const footerDetailStyle = css({
  textAlign: 'center',

  fontSize: Theme.text.small.fontSize,
  lineHeight: Theme.text.small.lineHeight,
  color: Theme.color.mediumGray,

  fontWeight: 400,
});

import { css } from '@emotion/react';

export const BtnWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '55px',

  padding: '3px 0px 16px 0px',
  fontSize: '16px',
});

export const BackBtn = css({
  display: 'flex',
  alignItems: 'center',

  width: 'fit-content',
  cursor: 'pointer',
});

export const NextBtn = css({
  display: 'flex',
  alignItems: 'center',

  width: '240px',
  height: '44px',
});

import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const chipsMenuStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',

  width: '100%',
});

export const chipStyle = css({
  padding: '6px 12px',

  border: `1px solid ${Theme.color.border}`,
  borderRadius: Theme.borderRadius.medium,

  backgroundColor: Theme.color.white,
  boxShadow: '0px 3px 7px 0px rgba(0, 0, 0, 0.05)',

  fontSize: Theme.text.medium.fontSize,
  lineHeight: Theme.text.medium.lineHeight,

  cursor: 'pointer',
});

export const selectedStyle = (isSelected: boolean) =>
  isSelected &&
  css({
    border: `1px solid ${Theme.color.naverBlue}`,
    color: Theme.color.naverBlue,
  });

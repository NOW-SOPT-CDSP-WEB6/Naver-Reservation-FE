import { css } from '@emotion/react';

import { HomeBtnProps } from '@/components/home/common/homeCategoryBtn/HomeCategoryBtn';

import { Theme } from '@/styles/theme';

export const iconStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '60px',
  height: '60px',

  borderRadius: Theme.borderRadius.medium,
});

export const selectStyle = (isSelected: Required<HomeBtnProps>['isSelected']) =>
  css({
    border: isSelected ? 'none' : `1px solid ${Theme.color.border}`,
    backgroundColor: isSelected ? Theme.color.naverBlue : Theme.color.lightGray,
  });

export const buttonStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',

  cursor: 'pointer',
});

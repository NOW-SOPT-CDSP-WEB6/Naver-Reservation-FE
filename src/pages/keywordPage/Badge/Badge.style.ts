import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

export const badgeWrapper = (isClick: boolean) =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '0',

    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',

    width: 'fit-content',
    padding: '6px 14px',
    marginBottom: '6px',

    borderRadius: '6px',
    border: `1px solid ${isClick ? Theme.color.naverBlue : Theme.color.border}`,

    backgroundColor: `${isClick ? Theme.color.naverSkyBlue : Theme.color.white}`,

    fontSize: Theme.text.medium.fontSize,
    fontWeight: 400,
    lineHeight: '19.6px',

    cursor: 'pointer',
  });

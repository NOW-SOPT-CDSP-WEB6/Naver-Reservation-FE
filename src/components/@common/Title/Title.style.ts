import { css } from '@emotion/react';

import { TitleProps } from '@/components/@common/Title/Title';

import { Theme } from '@/styles/theme';

export const titleStyle = (size: Required<TitleProps>['size']) => {
  const style = {
    large: css({
      fontSize: Theme.title.large.fontSize,
      lineHeight: Theme.title.large.lineHeight,
    }),
    medium: css({
      fontSize: Theme.title.medium.fontSize,
      lineHeight: Theme.title.medium.lineHeight,
    }),
    small: css({
      fontSize: Theme.title.small.fontSize,
      lineHeight: Theme.title.small.lineHeight,
    }),
  };
  return style[size];
};

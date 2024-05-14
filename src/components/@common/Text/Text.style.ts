import { css } from '@emotion/react';

import { TextProps } from '@/components/@common/Text/Text';

import { Theme } from '@/styles/theme';

export const textStyle = (size: Required<TextProps>['size']) => {
  const style = {
    large: css({
      fontSize: Theme.text.large.fontSize,
      lineHeight: Theme.text.large.lineHeight,
    }),

    medium: css({
      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),

    small: css({
      fontSize: Theme.text.small.fontSize,
      lineHeight: Theme.text.small.lineHeight,
    }),

    writing: css({
      fontSize: Theme.text.writing.fontSize,
      lineHeight: Theme.text.writing.lineHeight,
    }),
  };

  return style[size];
};

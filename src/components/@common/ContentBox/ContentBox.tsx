import React from 'react';

import { BoxStyleProps, getBoxStyle } from '@/components/@common/ContentBox/ContentBox.style';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: BoxStyleProps;
}

const ContentBox = ({ children, styles = {} }: BoxProps) => {
  return <div css={getBoxStyle(styles)}>{children}</div>;
};

export default ContentBox;

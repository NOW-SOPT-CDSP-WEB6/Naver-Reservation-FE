import React from 'react';

import { BoxStyleProps, getBoxStyle } from '@/components/@common/ContentBox/ContentBox.style';
import { Theme } from '@/styles/theme';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: BoxStyleProps;
  variant?: 'default' | 'round' | 'round2';
}

const ContentBox = ({ children, styles = {}, variant = 'default' }: BoxProps) => {
  const roundStyles = {
    ...(variant !== 'default' ? { marginLeft: "16px", marginRight: "16px", backgroundColor: Theme.color.white } : {}),
    ...(variant === 'round' ? { borderRadius: "15px" } : {}),
    ...(variant === 'round2' ? { borderRadius: "20px"} : {}),
  };
  return <div css={getBoxStyle({...styles, ...roundStyles})}>{children}</div>;
};

export default ContentBox;

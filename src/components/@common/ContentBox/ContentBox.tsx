import { ReactElement, ReactNode } from 'react';
import React from 'react';

import { boxStyle } from '@/components/@common/ContentBox/ContentBox.style';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  children?: ReactNode;
  boxShadow?: string;
}

const ContentBox = ({
  margin = '16px',
  padding = '30px',
  children,
  borderRadius = '15px',
  boxShadow = 'show',
}: BoxProps) => {
  const style = {
    margin,
    padding,
    borderRadius,
  };
  return (
    <div css={[boxStyle, boxShadow]} style={style}>
      {children}
    </div>
  );
};

export default ContentBox;

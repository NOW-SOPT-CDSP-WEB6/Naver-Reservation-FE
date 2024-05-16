import { HTMLAttributes } from 'react';

import { titleStyle } from '@/components/@common/Title/Title.style';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 'large' | 'medium' | 'small';
}

const Title = ({ size = 'medium', children, ...props }: TitleProps) => {
  return (
    <h1 css={titleStyle(size)} {...props}>
      {children}
    </h1>
  );
};

export default Title;

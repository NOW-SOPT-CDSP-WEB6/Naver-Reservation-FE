import { HTMLAttributes } from 'react';

import { textStyle } from '@/components/@common/Text/Text.style';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 'large' | 'medium' | 'small' | 'writing';
}

const Text = ({ size = 'medium', children, ...props }: TextProps) => {
  return (
    <p css={textStyle(size)} {...props}>
      {children}
    </p>
  );
};

export default Text;

import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import { btnSize, btnStyle, btnVariant } from '@/components/@common/Button/Button.style';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'next' | 'review' | 'look';
  children?: ReactNode;
  size?: 'small' | 'medium' | 'large';
  icon?: ReactElement;
}

const Button = ({ variant = 'next', children, size = 'medium', icon, ...props }: IButtonProps) => {
  return (
    <button css={[btnStyle, btnVariant[variant], btnSize[size]]} {...props}>
      {icon}
      {children}
    </button>
  );
};

export default Button;

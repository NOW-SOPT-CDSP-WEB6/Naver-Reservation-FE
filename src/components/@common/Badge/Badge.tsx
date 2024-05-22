import { ReactNode } from 'react';

import { badgeStyle, customStyle } from '@/components/@common/Badge/Badge.style';

interface BadgeProps {
  size: 'default' | 'small';
  children?: ReactNode;
}

const Badge = ({ size, children }: BadgeProps) => {
  return <div css={[badgeStyle, customStyle[size]]}>{children}</div>;
};

export default Badge;

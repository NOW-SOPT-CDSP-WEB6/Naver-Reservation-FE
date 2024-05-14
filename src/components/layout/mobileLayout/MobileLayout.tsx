import { ReactNode } from 'react';

import { layoutStyle } from '@/components/layout/mobileLayout/MobileLayout.style';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  return (
    <div role="application" aria-label="모바일 뷰" css={layoutStyle}>
      {children}
    </div>
  );
};

export default MobileLayout;

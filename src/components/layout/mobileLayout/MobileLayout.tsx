import { ReactNode, useEffect } from 'react';

import { layoutStyle } from '@/components/layout/mobileLayout/MobileLayout.style';
import { useLocation } from 'react-router-dom';

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const {pathname} = useLocation();

  useEffect(() =>  {
    window.scrollTo(0 , 0);
  }, [pathname])

  return (
    <div role="application" aria-label="모바일 뷰" css={layoutStyle}>
      {children}
    </div>
  );
};

export default MobileLayout;

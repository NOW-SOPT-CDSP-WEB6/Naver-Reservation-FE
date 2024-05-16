import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { menuStyle } from '@/components/home/common/homeMenu/HomeMenu.style';
import HomeMenuItem from '@/components/home/common/homeMenu/HomeMenuItem';

interface HomeMenuProps extends ComponentPropsWithoutRef<'ul'> {
  children: ReactNode;
}

const HomeMenu = ({ children }: HomeMenuProps) => {
  return (
    <ul role="tablist" css={menuStyle}>
      {children}
    </ul>
  );
};

HomeMenu.Item = HomeMenuItem;

export default HomeMenu;

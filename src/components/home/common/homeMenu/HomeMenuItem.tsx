import { ComponentPropsWithoutRef } from 'react';

import { indicatorStyle, menuItemStyle } from '@/components/home/common/homeMenu/HomeMenu.style';

interface HomeMenuItemProps extends ComponentPropsWithoutRef<'li'> {
  tabId?: string | number;
  selectedId: string | number;
}

const HomeMenuItem = ({ tabId, selectedId, children }: HomeMenuItemProps) => {
  return (
    <li css={menuItemStyle}>
      <p>{children}</p>
      {tabId === selectedId && <div css={indicatorStyle} />}
    </li>
  );
};

export default HomeMenuItem;

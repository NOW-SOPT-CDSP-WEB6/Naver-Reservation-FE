import { ComponentPropsWithoutRef } from 'react';

import HomeCategoryBtn from '@/components/home/common/homeCategoryBtn/HomeCategoryBtn';
import { containerStyle } from '@/components/home/homeCategoryMenu/HomeCategoryMenu.style';

import { CATEGORY } from '@/constants';

interface HomeCategoryMenuProps extends Omit<ComponentPropsWithoutRef<'section'>, 'onSelect'> {
  selectedMenu?: string;
  onSelect?: (category: string) => void;
}

const HomeCategoryMenu = ({ selectedMenu, onSelect }: HomeCategoryMenuProps) => {
  return (
    <section css={containerStyle}>
      {Object.keys(CATEGORY).map((category) => (
        <HomeCategoryBtn
          onClick={() => onSelect?.(category)}
          category={category}
          isSelected={category === selectedMenu}
        />
      ))}
    </section>
  );
};

export default HomeCategoryMenu;

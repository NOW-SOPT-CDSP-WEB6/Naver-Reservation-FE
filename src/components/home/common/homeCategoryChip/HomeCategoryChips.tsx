import { ComponentPropsWithoutRef } from 'react';

import HomeCategoryChip from '@/components/home/common/homeCategoryChip/HomeCategoryChip';
import { chipsMenuStyle } from '@/components/home/common/homeCategoryChip/HomeCategoryChip.style';

interface HomeCategoryChipsProps extends ComponentPropsWithoutRef<'menu'> {}

const HomeCategoryChips = ({ children }: HomeCategoryChipsProps) => {
  return <menu css={chipsMenuStyle}>{children}</menu>;
};

HomeCategoryChips.Item = HomeCategoryChip;

export default HomeCategoryChips;

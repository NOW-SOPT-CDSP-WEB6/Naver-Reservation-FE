import { ButtonHTMLAttributes } from 'react';

import Text from '@/components/@common/Text/Text';
import {
  buttonStyle,
  iconStyle,
  selectStyle,
} from '@/components/home/common/homeCategoryBtn/HomeCategoryBtn.style';

import { getCategoryIcon } from '@/utils/category';

export interface HomeBtnProps extends ButtonHTMLAttributes<HTMLDivElement> {
  category: string;
  isSelected?: boolean;
}

const HomeCategoryBtn = ({ category, isSelected = false, ...props }: HomeBtnProps) => {
  const Icon = getCategoryIcon(category, isSelected);

  return (
    <div role="button" tabIndex={0} aria-label="카테고리 버튼" css={buttonStyle} {...props}>
      <div css={[iconStyle, selectStyle(isSelected)]}>
        {Icon && <Icon width={40} height={40} />}
      </div>
      <Text>{category}</Text>
    </div>
  );
};

export default HomeCategoryBtn;

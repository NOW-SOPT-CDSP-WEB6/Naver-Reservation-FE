import { ButtonHTMLAttributes } from 'react';

import {
  chipStyle,
  selectedStyle,
} from '@/components/home/common/homeCategoryChip/HomeCategoryChip.style';

interface HomeCategoryChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

const HomeCategoryChip = ({
  status,
  onClick,
  isSelected = false,
  ...props
}: HomeCategoryChipProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <button
      css={[chipStyle, selectedStyle(isSelected)]}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {status}
    </button>
  );
};

export default HomeCategoryChip;

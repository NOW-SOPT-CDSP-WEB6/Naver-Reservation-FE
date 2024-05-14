import Status from '@assets/svgs/status-group.svg?react';

import Text from '@/components/@common/Text/Text';
import { headerStyle } from '@/components/layout/header/Header.style';

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header css={headerStyle}>
      <Text size="small">09:41</Text>
      <Status width={60} />
    </header>
  );
};

export default Header;

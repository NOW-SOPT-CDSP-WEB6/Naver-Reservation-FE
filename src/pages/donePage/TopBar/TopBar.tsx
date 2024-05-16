import { ExitBtnStyle } from '@/pages/donePage/TopBar/TopBar.style';
import { Wrapper } from '@/pages/donePage/TopBar/TopBar.style';

import ExitBtn from '@/assets/svgs/done/done_ic_exit.svg?react';

const TopBar = () => {
  return (
    <header css={Wrapper}>
      <ExitBtn css={ExitBtnStyle}></ExitBtn>
    </header>
  );
};

export default TopBar;

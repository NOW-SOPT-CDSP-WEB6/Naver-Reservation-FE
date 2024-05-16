import { ExitBtnStyle } from '@/pages/donePage/TopBar/TopBar.style';
import { Wrapper } from '@/pages/donePage/TopBar/TopBar.style';

import ExitBtn from '@/assets/svgs/done/done_ic_exit.svg?react';

const TopBar = () => {
  return (
    <section css={Wrapper}>
      <ExitBtn css={ExitBtnStyle}></ExitBtn>
    </section>
  );
};

export default TopBar;

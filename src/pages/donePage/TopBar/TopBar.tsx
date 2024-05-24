import { useNavigate } from 'react-router-dom';

import { ExitBtnStyle, Wrapper } from '@/pages/donePage/TopBar/TopBar.style';

import ExitBtn from '@/assets/svgs/done/done_ic_exit.svg?react';

const TopBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <header css={Wrapper}>
      <ExitBtn css={ExitBtnStyle} onClick={handleClick}></ExitBtn>
    </header>
  );
};

export default TopBar;

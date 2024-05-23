import * as s from '@/components/@common/BottomNavBtn/BottomNavBtn.style';
import Button from '@/components/@common/Button/Button';

import BackIcon from '@/assets/svgs/home_ic_back.svg?react';
import { useNavigate } from 'react-router-dom';

interface BottomNavBtnProps {
  handleNextClick?: () => void;
}
const BottomNavBtn = ({handleNextClick}: BottomNavBtnProps) => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <div css={s.BtnWrapper}>
      <nav css={s.BackBtn} onClick={handleBackClick}>
        <BackIcon width="40px" height="40px" />
        이전
      </nav>
      <nav css={s.NextBtn} onClick={handleNextClick}>
        <Button variant={'next'} size='large'>다음</Button>
      </nav>
    </div>
  );
};

export default BottomNavBtn;

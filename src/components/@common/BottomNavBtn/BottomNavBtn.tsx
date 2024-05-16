import * as s from "@/components/@common/BottomNavBtn/BottomNavBtn.style";
import Button from "@/components/@common/Button/Button";
import BackIcon from "@/assets/svgs/home_ic_back.svg?react";

const BottomNavBtn = () => {
    return (
        <div css={s.BtnWrapper}>
            <nav css={s.BackBtn}>
                <BackIcon width="40px" height="40px"/>
                이전
            </nav>
            <nav css={s.NextBtn}>
                <Button variant={"next"}>다음</Button>
            </nav>
        </div>
    );
};

export default BottomNavBtn;
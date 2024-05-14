import * as s from "@/components/@common/BottomNavBtn/BottomNavBtn.style";
import Button from "@/components/@common/Button/Button";

const BottomNavBtn = () => {
    return (
        <div css={s.BtnWrapper}>
            <nav css={s.BackBtn}>
                {/* <BackIcon/> */}
                이전
            </nav>
            <nav css={s.NextBtn}>
                <Button variant={"next"}>다음</Button>
            </nav>
        </div>
    );
};

export default BottomNavBtn;
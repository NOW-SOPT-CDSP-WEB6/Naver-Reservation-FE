import * as s from "@/components/@common/BottomNavBtn/BottomNavBtn.style";
import Button from "@/components/@common/Button/Button";

const BottomNavBtn = () => {
    return (
        <div css={s.BtnWrapper}>
            <div css={s.BackBtn}>
                <Button variant={"back"}>이전</Button>
            </div>
            <div css={s.NextBtn}>
                <Button variant={"next"}>다음</Button>
            </div>
        </div>
    );
};

export default BottomNavBtn;
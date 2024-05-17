import * as s from "@/pages/keywordPage/Header/Header.style";
import headerSrc from "@/assets/img/keyword_img_1.png";
import { useState } from "react";

interface HeaderProps { }

const Header = ({ }: HeaderProps) => {
    const [meetCnt, setMeetCnt] = useState(2);
    return (
        <section css={s.Wrapper}>
            <img src={headerSrc} />
            <div css={s.detail}>
                <header css={s.title}>아반트헤어 압구정로데오점</header>
                <span css={s.subTitle}>{meetCnt}번째 방문이네요!</span>
            </div>
        </section>
    );
};

export default Header;
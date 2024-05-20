import { BADGE } from "@/constants/badge";
import * as s from "./CarouselCard.style"
import Badge from "@/pages/keywordPage/Badge/Badge";
import OffFull from "@/assets/svgs/keyword/keyword_btn_detail_defalt.svg?react";
import OnFull from "@/assets/svgs/keyword/keyword_btn_detail_click.svg?react";

interface CarouselCardProps {
  badgeTitle: string,
  isFullBadge: boolean,
  setIsFullBadge: React.Dispatch<React.SetStateAction<boolean>>,
}

const CarouselCard = ({ badgeTitle, isFullBadge, setIsFullBadge }: CarouselCardProps) => {

  console.log({ isFullBadge }, +isFullBadge)
  return (
    <section css={s.Wrapper}>
      <div css={s.title}>{badgeTitle}</div>
      {
        BADGE[badgeTitle].map((badge, idx) => {
          if (!isFullBadge && idx >= 6) return;
          return (<Badge>{badge.title}</Badge>)
        })
      }
      <div css={[s.fullBtn, s.customBtn[+isFullBadge]]}>
        {
          isFullBadge
            ? <OnFull width="38px" height="38px" onClick={() => setIsFullBadge(false)} cursor="pointer" />
            : <OffFull width="38px" height="38px" onClick={() => setIsFullBadge(true)} cursor="pointer" />
        }
      </div>

    </section>
  );
};

export default CarouselCard;
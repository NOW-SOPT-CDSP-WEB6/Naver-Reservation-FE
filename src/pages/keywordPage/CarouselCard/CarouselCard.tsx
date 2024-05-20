import { BADGE } from "@/constants/badge";
import * as s from "./CarouselCard.style"
import Badge from "@/pages/keywordPage/Badge/Badge";
import { useState } from "react";
import OffFull from "@/assets/svgs/keyword/keyword_btn_detail_defalt.svg?react";
import OnFull from "@/assets/svgs/keyword/keyword_btn_detail_click.svg?react";

interface CarouselCardProps {
  badgeTitle: string,
  isFullBadge: boolean,
  setIsFullBadge: React.Dispatch<React.SetStateAction<boolean>>,
}

const CarouselCard = ({ badgeTitle, isFullBadge, setIsFullBadge }: CarouselCardProps) => {

  console.log({ isFullBadge })
  return (
    <section css={s.Wrapper}>
      <div css={s.title}>{badgeTitle}</div>
      {
        BADGE[badgeTitle].map((badge) => {
          return (<Badge>{badge.title}</Badge>)
        })
      }
      <div css={s.fullBtn}>
        {
          isFullBadge
            ? <OffFull width="38px" height="38px" onClick={() => setIsFullBadge(false)} cursor="pointer" />
            : <OnFull width="38px" height="38px" onClick={() => setIsFullBadge(true)} cursor="pointer" />
        }
      </div>

    </section>
  );
};

export default CarouselCard;
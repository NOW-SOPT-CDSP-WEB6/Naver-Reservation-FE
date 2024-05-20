import { BADGE } from "@/constants/badge";
import * as s from "./CarouselCard.style"
import Badge from "@/pages/keywordPage/Badge/Badge";

interface CarouselCardProps {
  badgeTitle: string,
}

const CarouselCard = ({ badgeTitle }: CarouselCardProps) => {
  return (
    <section css={s.Wrapper}>
      <div css={s.title}>{badgeTitle}</div>
      {
        BADGE[badgeTitle].map((badge) => {
          return (<Badge>{badge.title}</Badge>)
        })
      }
    </section>
  );
};

export default CarouselCard;
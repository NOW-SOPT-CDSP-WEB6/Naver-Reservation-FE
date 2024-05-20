import ContentBox from "@/components/@common/ContentBox/ContentBox";
import * as s from "./Carousel.style"
import Text from "@/components/@common/Text/Text";
import { BADGE_CATEGORY } from "@/constants/badge";
import CarouselCard from "@/pages/keywordPage/CarouselCard/CarouselCard";

interface CarouselProps { }


const Carousel = ({ }: CarouselProps) => {
  const category = "뷰티";

  return (
    <ContentBox
      variant='round'
      styles={{
        marginTop: '12px',
        padding: '26px 0 42px 20px',
      }}
    >
      <header css={s.header}>
        <div css={s.title}>어떤 점이 좋았나요?</div>
        <div css={s.tag}>필수</div>
      </header>
      <Text size="medium" css={s.detail}>이 가게에 어울리는 키워드를 골라주세요.(1개~5개)</Text>
      <section css={s.carouselWrapper}>
        {
          BADGE_CATEGORY[category].map((badge) => {
            return (<CarouselCard badgeTitle={badge} />)
          })
        }
      </section>
    </ContentBox>
  );
};

export default Carousel;
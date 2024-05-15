import ContentBox from "@/components/@common/ContentBox/ContentBox";
import { Wrapper, plusBtn, text } from "@/pages/reviewPage/DragDrop/DragDrop.style";
import PlusBtn from "@/assets/svgs/review/review_btn_plus.svg?react"

const DragDrop = () => {
  return (
    <ContentBox
      variant='round2'
      styles={{
        height: '180px',
        marginTop: '20px',
      }}>
      <section css={Wrapper}>
        <span css={text}>사진을 추가해 주세요</span>
        <PlusBtn css={plusBtn}/>
      </section>
    </ContentBox>
  );
};

export default DragDrop;
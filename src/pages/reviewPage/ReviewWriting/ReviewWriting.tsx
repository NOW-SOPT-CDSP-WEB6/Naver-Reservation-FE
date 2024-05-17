import ContentBox from "@/components/@common/ContentBox/ContentBox";
import ReviewIcon from "@/assets/svgs/review/home_ic_pen.svg?react"
import Vector from "@/assets/svgs/review/Vector_8.svg?react"
import { caption, cntWrapper, detail, title, wrapper, writing } from "@/pages/reviewPage/ReviewWriting/ReviewWriting.style";
import { REVIEW_PLACE_HOLDER, REVIEW_CHAR_MAXIMUM } from "@/constants";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface ReviewWritingProps {

};

const ReviewWriting = ({ }: ReviewWritingProps) => {
  const [text, setText] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isFocus])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= REVIEW_CHAR_MAXIMUM) {
      setText(e.target.value);
    }
  };

  return (
    <>
      <ContentBox
        variant='round2'
        styles={{
          height: '151px',
          marginTop: '11px',
        }}
      >
        <section css={wrapper}>
          {isFocus ? (
            <textarea
              ref={textareaRef}
              value={text}
              css={writing}
              onChange={handleChange}
              placeholder="리뷰를 작성해 주세요"
            />
          ) : (
            <div onClick={() => setIsFocus(true)}>
              <PlaceHolder />
            </div>
          )}
          <div css={cntWrapper}>
            {text.length} / {REVIEW_CHAR_MAXIMUM}
          </div>
        </section>
      </ContentBox>
      <div css={caption}>
        <p>리뷰 작성 유의사항</p>
        <Vector width="90px" strokeWidth="1px"/>
      </div>
    </>

  );
};

const PlaceHolder = () => {
  return (
    <>
      <div css={title}>
        <ReviewIcon />
        리뷰를 작성해주세요
      </div>
      <div css={detail}>
        {REVIEW_PLACE_HOLDER}
      </div>
    </>
  )
}
export default ReviewWriting;
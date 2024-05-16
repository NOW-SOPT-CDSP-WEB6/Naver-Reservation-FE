import ContentBox from "@/components/@common/ContentBox/ContentBox";
import ReviewIcon from "@/assets/svgs/review/home_ic_pen.svg?react"
import { cntWrapper, detail, title, wrapper, writing } from "@/pages/reviewPage/ReviewWriting/ReviewWriting.style";
import { REVIEW_PLACE_HOLDER } from "@/constants";
import { ChangeEvent, useEffect, useRef, useState } from "react";

interface ReviewWritingProps {

};

const ReviewWriting = ({ }: ReviewWritingProps) => {
  const [text, setText] = useState("");
  const [charCnt, setCharCnt] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  console.log({charCnt});
  useEffect(() => {
    setCharCnt(text.length);
  }, [text]);

  useEffect(() => {
    if (isFocus && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isFocus])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
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
          {Math.max(charCnt, 0)} / 400
        </div>
      </section>
    </ContentBox>
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
import * as s from './Stepper.style';
import KeywordSrc from '@/assets/svgs/stepper/keyword.svg?react'
import ReviewOnSrc from '@/assets/svgs/stepper/reviewOn.svg?react'
import ReviewOffSrc from '@/assets/svgs/stepper/reviewOff.svg?react'
import DoneOnSrc from '@/assets/svgs/stepper/doneOn.svg?react'
import DoneOffSrc from '@/assets/svgs/stepper/doneOff.svg?react'
import { useMatch } from 'react-router-dom';

interface StepperProps {
}

const Stepper = ({ }: StepperProps) => {
  const curStep = (useMatch(`/keyword/*`) || useMatch('/review/*') || useMatch('/done/*'))?.pathnameBase;

  const keywordActive = curStep === '/keyword' || curStep === '/review' || curStep === '/done';
  const reviewActive = curStep === '/review' || curStep === '/done';
  const doneActive = curStep === '/done';

  return (
    <>
      <section css={s.stepperWrapper}>
        <KeywordSrc width='18px' css={s.stepStyle(keywordActive)} />
        <hr css={s.lineStyle}/>
        {
          reviewActive
            ? <ReviewOnSrc width='18px' css={s.stepStyle(true)} />
            : <ReviewOffSrc width='18px' css={s.stepStyle(false)} />
        }
        <hr css={s.lineStyle}/>
        {
          doneActive
            ? <DoneOnSrc width='18px' css={s.stepStyle(true)} />
            : <DoneOffSrc width='18px' css={s.stepStyle(false)} />
        }
      </section>
      <section css={s.detailWrapper}>
        <nav css={s.detailStyle(keywordActive)}>키워드</nav>
        <nav css={s.detailStyle(reviewActive)}>상세리뷰</nav>
        <nav css={s.detailStyle(doneActive)}>작성완료</nav>
      </section>
    </>
  );
};

export default Stepper;
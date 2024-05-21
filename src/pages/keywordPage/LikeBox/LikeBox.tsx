import { useState } from 'react';

import * as s from '@/pages/keywordPage/LikeBox/LikeBox.style';

import ContentBox from '@/components/@common/ContentBox/ContentBox';

import LikeOff from '@/assets/svgs/LikeOff.svg?react';
import LikeOn from '@/assets/svgs/LikeOn.svg?react';

import { KEYWORD_LIKE_LETTER } from '@/constants';

interface LikeBoxProps {}

const LikeBox = ({}: LikeBoxProps) => {
  const [isLike, setIsLike] = useState(false);

  return (
    <ContentBox
      variant="round"
      styles={{
        height: '190px',
        marginTop: '12px',
        marginBottom: '60px',
      }}
    >
      <section css={s.wrapper}>
        <div css={s.title}>이 곳이 마음에 든다면,</div>
        <div css={s.detail}>{KEYWORD_LIKE_LETTER}</div>
        <div onClick={() => setIsLike((p) => !p)} style={{ cursor: 'pointer' }}>
          {isLike ? (
            <LikeOn width="212px" height="52px" />
          ) : (
            <LikeOff width="212px" height="52px" />
          )}
        </div>
      </section>
    </ContentBox>
  );
};

export default LikeBox;

import * as s from '@/pages/keywordPage/TotalPrice/TotalPrice.style';

import ContentBox from '@/components/@common/ContentBox/ContentBox';

interface TotalAccountProps {}

const TotalPrice = ({}: TotalAccountProps) => {
  return (
    <ContentBox
      variant="round"
      styles={{
        height: '114px',
      }}
    >
      <section css={s.wrapper}>
        <div css={s.detail}>
          <span>지나 수석 디자이너</span>
          <span>33,000원</span>
        </div>
        <hr css={s.vector} />
        <div css={s.total}>
          <span>총 금액</span>
          <span>33,000원</span>
        </div>
      </section>
    </ContentBox>
  );
};

export default TotalPrice;

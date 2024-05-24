import * as s from '@/pages/keywordPage/TotalPrice/TotalPrice.style';

import ContentBox from '@/components/@common/ContentBox/ContentBox';

import { addCommasToNumber } from '@/utils/price';

interface TotalAccountProps {
  mainDescription: string;
  price: number;
}

const TotalPrice = ({ mainDescription, price }: TotalAccountProps) => {
  return (
    <ContentBox
      variant="round"
      styles={{
        height: '114px',
      }}
    >
      <section css={s.wrapper}>
        <div css={s.detail}>
          <span>{mainDescription}</span>
          <span>{addCommasToNumber(price)}원</span>
        </div>
        <hr css={s.vector} />
        <div css={s.total}>
          <span>총 금액</span>
          <span>{addCommasToNumber(price)}원</span>
        </div>
      </section>
    </ContentBox>
  );
};

export default TotalPrice;

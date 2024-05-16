import {
  HeaderWrapper,
  blueHighlight,
  topDetail,
  topTitle,
} from '@/pages/donePage/DoneHeader/DoneHeader.style';

import Text from '@/components/@common/Text/Text';
import Title from '@/components/@common/Title/Title';

const DoneHeader = () => {
  return (
    <>
      <section css={HeaderWrapper}>
        <Title size={'large'}>
          <span css={topTitle}>
            <span css={blueHighlight}>2번째</span> 리뷰 쓰기 완료!
          </span>
        </Title>
        <Text size={'medium'}>
          <p css={topDetail}>장소를 찾는 사람들에게 많은 도움이 될 거예요!</p>
        </Text>
      </section>
    </>
  );
};

export default DoneHeader;

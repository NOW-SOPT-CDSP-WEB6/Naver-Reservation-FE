import {
  badgeWrapper,
  detailIcon,
  detailList,
  headerTitle,
  headerWrapper,
  mainDetail,
  subDetail,
} from '@/pages/reviewPage/Header/Header.style';

import Badge from '@/components/@common/Badge/Badge';
import Stepper from '@/components/@common/Stepper/Stepper';
import { convertDate } from '@/utils/date';
import { addCommasToNumber } from '@/utils/price';

interface HeaderProps {
  storeName: string;
  reservationDate: string;
  mainDescription: string;
  price: number;
}
const Header = ({storeName, reservationDate, mainDescription, price}: HeaderProps) => {
  return (
    <div style={{backgroundColor: "white"}}>
      <Stepper />
      <section css={headerWrapper}>
        <h3 css={headerTitle}>{storeName}</h3>
        <ul>
          <li css={detailList}>
            <div css={detailIcon}>⏱️</div>
            <span css={mainDetail}>{convertDate(reservationDate)}</span>
            <span css={subDetail}>&nbsp;· 2번째 방문</span>
          </li>
          <li css={detailList}>
            <div css={detailIcon}>📋</div>
            <span css={mainDetail}>{mainDescription}</span>
            <span css={subDetail}>&nbsp;· {addCommasToNumber(price)}원</span>
          </li>
          <li css={detailList}>
            <div css={detailIcon}>🚶🏻</div>
            <div>
              <span css={subDetail}>이용 방법</span>
              <span css={mainDetail}>&nbsp;매장 방문</span>
              <span css={subDetail}>&nbsp;· 대기 시간</span>
              <span css={mainDetail}>&nbsp;바로 입장</span>
              <span css={subDetail}>&nbsp;· 목적</span>
              <span css={mainDetail}>&nbsp;뷰티</span>
              <span css={subDetail}>&nbsp;· 동행</span>
              <span css={mainDetail}>&nbsp;혼자</span>
            </div>
          </li>
        </ul>
        <div css={badgeWrapper}>
          <Badge size="small">💓 친절해요</Badge>
          <Badge size="small">💇🏻‍♀️ 스타일 추천을 잘해줘요</Badge>
          <Badge size="small">+2</Badge>
        </div>
      </section>
    </div>
  );
};

export default Header;

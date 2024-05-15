import Badge from "@/components/@common/Badge/Badge";
import { badgeWrapper, detail, detailIcon, detailList, headerTitle, headerWrapper, mainDetail, subDetail } from "@/pages/reviewPage/Header/Header.style";

const Header = () => {
  return (
    <div css={headerWrapper}>
      <div css={headerTitle}>아반트헤어 압구정점</div>
      <div css={detailList}>
        <div css={detailIcon}>⏱️</div>
        <span css={mainDetail}>2024.4.14(월)</span>
        <span css={subDetail}>&nbsp;· 2번째 방문</span>
      </div>
      <div css={detailList}>
        <div css={detailIcon}>📋</div>
        <span css={mainDetail}>지나 수석 디자이너</span>
        <span css={subDetail}>&nbsp;· 33,000원</span>
      </div>
      <div css={detailList}>
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
      </div>
      <div css={badgeWrapper}>
        <Badge size="small" >💓 친절해요</Badge>
        <Badge size="small" >💇🏻‍♀️ 스타일 추천을 잘해줘요</Badge>
        <Badge size="small" >+2</Badge>
      </div>
    </div>
  );
};

export default Header;

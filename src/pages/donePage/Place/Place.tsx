import {
  Address,
  AlignRow,
  CafeText,
  FavIconStyle,
  Name,
  PlaceStyle1,
  PlaceStyle2,
  PlaceStyle3,
  Wrapper,
} from '@/pages/donePage/Place/Place.style';

import ContentBox from '@/components/@common/ContentBox/ContentBox';
import Text from '@/components/@common/Text/Text';

import FavIcon2 from '@/assets/svgs/done/fav2.svg?react';
import FavIcon from '@/assets/svgs/done/fav.svg?react';

const PlaceList = () => {
  return (
    <>
      <section css={Wrapper}>
        <ContentBox styles={{ marginRight: '10px' }}>
          <div css={PlaceStyle1}>
            <Text size="small" css={Address}>
              서울 용산구 이태원로55...
            </Text>
            <Text size="medium" css={Name}>
              한남작업실
            </Text>
          </div>

          <div css={AlignRow}>
            <FavIcon css={FavIconStyle}></FavIcon>
            <Text size="medium" css={CafeText}>
              카페
            </Text>
          </div>
        </ContentBox>
        <ContentBox styles={{ marginRight: '10px' }}>
          <div css={PlaceStyle2} className="hongdae">
            <Text size="small" css={Address}>
              서울 마포구 와우산로15...
            </Text>
            <Text size="medium" css={Name}>
              봉주르정식
            </Text>
          </div>
          <div css={AlignRow}>
            <FavIcon2 css={FavIconStyle}></FavIcon2>
            <Text size="medium" css={CafeText}>
              카페
            </Text>
          </div>
        </ContentBox>
        <ContentBox styles={{ marginRight: '10px' }}>
          <div css={PlaceStyle3} className="seongsu">
            <Text size="small" css={Address}>
              서울 성동구 연무장길 56...
            </Text>
            <Text size="medium" css={Name}>
              자연도 소금빵in 성수
            </Text>
          </div>
          <div css={AlignRow}>
            <FavIcon css={FavIconStyle}></FavIcon>
            <Text size="medium" css={CafeText}>
              카페
            </Text>
          </div>
        </ContentBox>
      </section>
    </>
  );
};

export default PlaceList;

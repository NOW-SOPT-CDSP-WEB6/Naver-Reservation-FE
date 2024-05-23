import { useState } from 'react';

import { boxStyle, myInfoContainerStyle } from '@/pages/homePage/HomePage.style';

import ContentBox from '@/components/@common/ContentBox/ContentBox';
import HomeFooter from '@/components/home/common/homeFooter/HomeFooter';
import { HomeMostReservation } from '@/components/home/common/homeMostReservation/HomeMostReservation';
import HomeMyInfo from '@/components/home/common/homeMyInfo/HomeMyInfo';
import HomeReservationCard from '@/components/home/common/homeReservationCard/HomeReservationCardItem';
import HomeCategoryMenu from '@/components/home/homeCategoryMenu/HomeCategoryMenu';
import HomeMenuBar from '@/components/home/homeMenuBar/HomeMenuBar';
import HomeReservationDetail from '@/components/home/homeReservationDetail/HomeReservationDetail';

import { useReservationInfoQuery } from '@/hooks/query/useReservationInfoQuery';
import { useReservationMarkMutation } from '@/hooks/query/useReservationMarkMutation';
import { useReservationQuery } from '@/hooks/query/useReservationQuery';

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState('전체');
  const [currentChip, setCurrentChip] = useState('방문 완료');

  const reservationData = useReservationQuery(selectedMenu);
  const reservationInfo = useReservationInfoQuery(selectedMenu);
  const { mutate: onMark } = useReservationMarkMutation();

  console.log(reservationData);

  const handleSelect = (item: string) => {
    setSelectedMenu(item);
  };

  const handleChipSelect = (item: string) => {
    setCurrentChip(item);
  };

  return (
    <>
      <section>
        <HomeMenuBar />
      </section>
      <ContentBox styles={boxStyle}>
        <HomeCategoryMenu selectedMenu={selectedMenu} onSelect={handleSelect} />

        <section css={myInfoContainerStyle}>
          <HomeMyInfo
            totalCount={reservationInfo?.count}
            totalExpense={reservationInfo?.totalPrice}
          />

          <HomeMostReservation>
            <HomeMostReservation.item rank={1} maxCount={2} currentCount={2}>
              아반테헤어 압구정점
            </HomeMostReservation.item>
            <HomeMostReservation.item rank={2} maxCount={2} currentCount={1}>
              준오헤어 가든강남점
            </HomeMostReservation.item>
          </HomeMostReservation>
        </section>
      </ContentBox>

      <HomeReservationDetail selectedChip={currentChip} onChipSelect={handleChipSelect}>
        {reservationData?.map((item) => (
          <HomeReservationCard
            key={item.reservationId}
            reservationId={item.reservationId}
            storeName={item.storeName}
            mainDescription={item.mainDescription}
            subDescription={item.subDescription}
            reservationDate={item.reservationDate}
            price={item.price}
            review={item.review}
            starMark={item.starMark}
            category={item.category}
            label="2번째, 7개월만의 예약"
            onMark={onMark}
          />
        ))}
      </HomeReservationDetail>
      <HomeFooter />
    </>
  );
};

export default HomePage;

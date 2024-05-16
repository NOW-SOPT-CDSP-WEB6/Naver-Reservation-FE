import { HTMLAttributes } from 'react';

import { iconStyle } from '@/components/home/common/homeReservationCard/HomeReservationCard.style';
import HomeReservationCardDetail from '@/components/home/common/homeReservationCard/HomeReservationCardDetail';
import HomeReservationCardDetailContent from '@/components/home/common/homeReservationCard/HomeReservationCardDetailContent';
import HomeReservationCardHeader from '@/components/home/common/homeReservationCard/HomeReservationCardHeader';
import HomeReservationCardReview from '@/components/home/common/homeReservationCard/HomeReservationCardReview';

import { getCategoryIcon } from '@/utils/category';

import Edit from '@/assets/svgs/home/home_ic_edit.svg?react';
import StarOff from '@/assets/svgs/home/home_ic_star_off.svg?react';
import StarOn from '@/assets/svgs/home/home_ic_star_on.svg?react';

interface HomeReservationCardProps extends HTMLAttributes<HTMLDivElement> {
  storeName: string;
  category: string;
  reservationDate: string;
  label: string; // 2번째, 7개월 만의 예약 !
  mainDescription: string;
  subDescription: string;
  price: string;
  review?: boolean;
  starMark?: boolean;
}

const HomeReservationCard = ({
  storeName,
  category,
  reservationDate,
  label,
  mainDescription,
  subDescription,
  price,
  review = false,
  starMark = false,
}: HomeReservationCardProps) => {
  const Icon = getCategoryIcon(category, true);

  return (
    <div>
      <HomeReservationCardHeader
        storeName={storeName}
        reservationDate={reservationDate}
        icon={<Icon css={iconStyle} />}
        starTrigger={
          <>
            {starMark ? <StarOn /> : <StarOff />}
            <Edit />
          </>
        }
      ></HomeReservationCardHeader>
      <HomeReservationCardDetail label={label}>
        <HomeReservationCardDetailContent
          mainDescription={mainDescription}
          subDescription={subDescription}
          price={price}
        />
        <HomeReservationCardReview review={review} />
      </HomeReservationCardDetail>
    </div>
  );
};

export default HomeReservationCard;

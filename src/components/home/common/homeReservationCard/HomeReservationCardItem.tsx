import { HTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

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
  reservationId: number;
  storeName: string;
  category: string;
  reservationDate: string;
  label: string; // 2번째, 7개월 만의 예약 !
  mainDescription: string;
  subDescription: string;
  price: number;
  review?: boolean;
  starMark?: boolean;
  onMark: (id: number) => void;
}

const HomeReservationCard = ({
  reservationId,
  storeName,
  category,
  reservationDate,
  label,
  mainDescription,
  subDescription,
  price,
  review = false,
  starMark = false,
  onMark,
}: HomeReservationCardProps) => {
  const navigate = useNavigate();
  const Icon = getCategoryIcon(category, true);

  const handleReviewClick = () => {
    navigate(`keyword/${reservationId}`);

    console.log('click');
  };

  return (
    <li>
      <HomeReservationCardHeader
        storeName={storeName}
        reservationDate={reservationDate}
        icon={<Icon css={iconStyle} />}
        starTrigger={
          <>
            {starMark ? (
              <StarOn onClick={() => onMark(reservationId)} />
            ) : (
              <StarOff onClick={() => onMark(reservationId)} />
            )}
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
        <HomeReservationCardReview review={review} onReview={handleReviewClick} />
      </HomeReservationCardDetail>
    </li>
  );
};

export default HomeReservationCard;

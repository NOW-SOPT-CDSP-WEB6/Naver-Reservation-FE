import AllIcon from '@assets/svgs/home/home_ic_all.svg?react';
import AllWhiteIcon from '@assets/svgs/home/home_ic_all_white.svg?react';
import BeautyIcon from '@assets/svgs/home/home_ic_beauty.svg?react';
import BeautyWhiteIcon from '@assets/svgs/home/home_ic_beauty_white.svg?react';
import HealthIcon from '@assets/svgs/home/home_ic_health.svg?react';
import HealthWhiteIcon from '@assets/svgs/home/home_ic_health_white.svg?react';
import LifeIcon from '@assets/svgs/home/home_ic_life.svg?react';
import LifeWhiteIcon from '@assets/svgs/home/home_ic_life_white.svg?react';
import LivingIcon from '@assets/svgs/home/home_ic_living.svg?react';
import LivingWhiteIcon from '@assets/svgs/home/home_ic_living_white.svg?react';
import RestaurantIcon from '@assets/svgs/home/home_ic_restaurant.svg?react';
import RestaurantWhiteIcon from '@assets/svgs/home/home_ic_restaurant_white.svg?react';
import SportIcon from '@assets/svgs/home/home_ic_sport.svg?react';
import SportWhiteIcon from '@assets/svgs/home/home_ic_sport_white.svg?react';
import TicketIcon from '@assets/svgs/home/home_ic_ticket.svg?react';
import TicketWhiteIcon from '@assets/svgs/home/home_ic_ticket_white.svg?react';

export const getCategoryIcon = (category: string, isSelected: boolean) => {
  switch (category) {
    case 'all': {
      return !isSelected ? AllIcon : AllWhiteIcon;
    }
    case 'beauty': {
      return !isSelected ? BeautyIcon : BeautyWhiteIcon;
    }
    case 'health': {
      return !isSelected ? HealthIcon : HealthWhiteIcon;
    }
    case 'life': {
      return !isSelected ? LifeIcon : LifeWhiteIcon;
    }
    case 'living': {
      return !isSelected ? LivingIcon : LivingWhiteIcon;
    }
    case 'restaurant': {
      return !isSelected ? RestaurantIcon : RestaurantWhiteIcon;
    }
    case 'sport': {
      return !isSelected ? SportIcon : SportWhiteIcon;
    }
    case 'ticket': {
      return !isSelected ? TicketIcon : TicketWhiteIcon;
    }
    default: {
      throw new Error('category params is invalid');
    }
  }
};

import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

const mediumTextColor = css({
  color: Theme.color.mediumGray,
  display: 'flex',
  alignItems: 'center',
});

const RateWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '17px',
  marginBottom: '15px',
});

const TextSpace = css({
  marginLeft: '2px',
  marginRight: '4px',
});

const StarIcon = css({
  width: '20px',
  height: '20px',
});

export { mediumTextColor, RateWrapper, TextSpace, StarIcon };

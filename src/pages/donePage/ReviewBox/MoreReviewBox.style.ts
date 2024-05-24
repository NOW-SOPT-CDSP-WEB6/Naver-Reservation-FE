import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

const WriteReview = css({
  display: 'flex',
  width: '95px',
  height: '28px',

  justifyContent: 'center',
  alignItems: 'center',
  border: '0px',
  borderRadius: '8px',
  marginTop: '48px',
});

const Wrapper = css({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '30px',
  paddingLeft: '20px',
});

const DetailTitle = css({
  color: Theme.color.mediumGray,
  width: '105px',
});

const DetailDate = css({
  color: Theme.color.mediumGray,
  width: '55px',
  height: '14px',
  fontSize: '12px',
  marginTop: '4px',
});

const DoneBtnStyle = css({
  position: 'absolute',
  top: '968px',
  right: '350px',
});

export { WriteReview, Wrapper, DetailTitle, DetailDate, DoneBtnStyle };

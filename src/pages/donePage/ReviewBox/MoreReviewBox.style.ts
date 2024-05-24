import { css } from '@emotion/react';

import { Theme } from '@/styles/theme';

const AlignCenter = css({
  display: 'flex',
  alignItems: 'center',
});

const WriteReview = css({
  justifyContent: 'center',
  width: '95px',
  height: '28px',
  border: '0px',
  borderRadius: '8px',
  marginTop: '48px',
  padding: '0px',
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
  right: 0,
  cursor: 'pointer',
});

const boxStyle = css({
  position: 'relative',
  border: `1px solid ${Theme.color.lightGray}`,
  borderRadius: '13px',
  boxShadow: '1px 1px 6px 0px rgba(0, 0, 0, 0.05)',
  padding: '16px',
  marginRight: '10px',
});

export { WriteReview, Wrapper, DetailTitle, DetailDate, DoneBtnStyle, AlignCenter, boxStyle };

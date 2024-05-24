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
  top: '-5px',
  right: '-5px',
});

const boxStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  position: 'relative',
  border: `1px solid ${Theme.color.lightGray}`,
  borderRadius: '13px',
  boxShadow: '1px 1px 6px 0px rgba(0, 0, 0, 0.05)',
  padding: '16px',
  marginRight: '10px',

  '& > button': {
    padding: '4px 8px',
    marginTop: '40px',

    fontSize: Theme.text.small.fontSize,
  },
});

export { DetailDate, DetailTitle, DoneBtnStyle, Wrapper, WriteReview, boxStyle };

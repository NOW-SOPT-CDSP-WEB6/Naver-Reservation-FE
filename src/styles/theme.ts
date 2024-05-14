const color = {
  // grayscale
  white: '#FFFFFF',
  black: '#222224',
  lightGray: '#F7F7F9',
  background1: '#F4F7F8',
  background2: '#F0F0F3',
  border: '#ECECEF',
  lowLightGray: '#D1D1D4',
  mediumGray: '#77777A',
  darkgray: '#444446',

  // Main

  naverSkyBlue: '#00C05A',
  myplaceBlue: '#4596E2', // badge
  naverBlue: '#287CFF',

  naverRightGreen: '#EAF8F2',
  naverGreen: '#00C05A',

  // badge
  myplacePink: '#FF98A0',
  likebtnRed85: '#FD6777',
  likebtnRed100: '#FD4D5F',
} as const;

const title = {
  large: {
    fontSize: '26px',
    lineHeight: '31px',
  },
  medium: {
    fontSize: '20px',
    lineHeight: '24px',
  },
  small: {
    fontSize: '18px',
    lineHeight: '21px',
  },
} as const;

const text = {
  large: {
    fontSize: '16px',
    lineHeight: '19px',
  },
  medium: {
    fontSize: '14px',
    lineHeight: '17px',
  },
  small: {
    fontSize: '12px',
    lineHeight: '14px',
  },
  writing: {
    // 줄글인 경우
    fontSize: '14px',
    lineHeight: '22px',
  },
} as const;

const borderRadius = {
  large: '20px',
  medium: '15px',
  small: '8px',
} as const;

// 디자인 요청
// const spacing = {
//     spacing1: "",
//     spacing2: "",
//     spacing3: "12px",
//     spacing4: "16px",
//     spacing5: "24px",
//     spacing6: "31px",
//     spacing7: "48px",
//     spacing8: "64px",
//     spacing9: "96px",
//     spacing10: "128px",
// } as const;

export const Theme = {
  color,
  title,
  text,
  borderRadius,
  // spacing
};

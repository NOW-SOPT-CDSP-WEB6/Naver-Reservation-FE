const color = {
  // grayscale
  White: '#FFFFFF',
  Black: '#222224',
  LightGray: '#F7F7F9',
  Background_1: '#F4F7F8',
  Background_2: '#F0F0F3',
  Border: '#ECECEF',
  LowLightGray: '#D1D1D4',
  MediumGray: '#77777A',
  Darkgray: '#444446',

  // Main

  Naver_SkyBlue: '#00C05A',
  myplace_blue: '#4596E2', // badge
  NAVER_Blue: '#287CFF',

  NAVER_RightGreen: '#EAF8F2',
  NAVER_Green: '#00C05A',

  // badge
  myplace_pink: '#FF98A0',
  likebtn_red85: '#FD6777',
  likebtn_red100: '#FD4D5F',
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

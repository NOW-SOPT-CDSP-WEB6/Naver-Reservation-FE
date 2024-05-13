const color = {
    // grayscale
    white: "#FFFFFF",
    black: "#222224",
    gray100: "#F7F7F9",
    gray200: "#F4F7F8",
    gray300: "#F0F0F3",
    gray400: "#ECECEF",
    gray500: "#D1D1D4",
    gray600: "#77777A",
    gray700: "#444446",

    // Main
    blue100: "#00C05A",
    blue200: "#4596E2",   // badge
    blue300: "#287CFF",

    green100: "#EAF8F2",
    green200: "#00C05A",

    // badge
    red100: "#FF98A0",
    red200: "#FD6777",
    red300: "#FD4D5F"

} as const;

const title = {
    large: {
        fontSize: "26px",
        lineHeight: "31px",
    },
    medium: {
        fontSize: "20px",
        lineHeight: "24px"
    },
    small: {
        fontSize: "18px",
        lineHeight: "21px"
    }
} as const;

const text = {
    large: {
        fontSize: "16px",
        lineHeight: "19px",
    },
    medium: {
        fontSize: "14px",
        lineHeight: "17px"
    },
    small: {
        fontSize: "12px",
        lineHeight: "14px",
    },
    writing: {   // 줄글인 경우
        fontSize: "14px",
        lineHeight: "22px"
    }
} as const;

const borderRadius = {
    large: "20px",
    medium: "15px",
    small: "8px",
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
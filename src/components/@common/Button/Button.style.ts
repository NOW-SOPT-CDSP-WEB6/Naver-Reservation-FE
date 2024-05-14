import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const btnStyle = css({
    display: "flex",
    justifyContent: "center",
    textAlign: "center",

    width: "100%",
    height: "100%",
    
    padding: "10px 44px",

    borderRadius: "8px",
    borderWidth: "0",
});

export const btnVariant = {
    next: css({
        color: "white",
        backgroundColor: Theme.color.NAVER_Blue
    }),

    review: css({
        color: Theme.color.Darkgray,
        backgroundColor: Theme.color.LowLightGray
    }),

    look: css({
        color: "white",
        backgroundColor: Theme.color.NAVER_Blue,
    }),
}

export const btnSize = {
    small: css({
        fontSize: "12px"
    }),

    medium: css({
        fontSize: "14px"
    }),

    large: css({
        fontSize: "16px"
    }),
}
import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const Wrapper = css({
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
    
    width: "100%",
    height: "100%",
})

export const text = css({
    marginBottom: "7px"
})
export const plusBtn = css({
    width: "49px",
    height: "49px",

    cursor: "pointer"
})
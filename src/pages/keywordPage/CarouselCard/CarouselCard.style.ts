import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const Wrapper = css({
  position: "relative",
  gap: "6px",
  // backgroundColor: "red"
})
export const title = css({
  position: "relative",

  fontSize: Theme.text.medium.fontSize,
  fontWeight: 600,

  paddingBottom: "13px",
})

export const fullBtn = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  position: "relative",
})

export const customBtn = [
  css({    // full 아닐 때
    zIndex: "1",
    height: "131px",
    marginTop: "-50px",
    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.40) 0%, #FFF 28.5%)",
  }),
  css({   // full 일 때
    paddingTop: "60px",
  }),
]
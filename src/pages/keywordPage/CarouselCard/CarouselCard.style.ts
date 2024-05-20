import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const Wrapper = css({
  gap: "6px",
})
export const title = css({
  fontSize: Theme.text.medium.fontSize,
  fontWeight: 600,

  paddingBottom: "13px",
})

export const fullBtn = css({
  display: "flex",
  justifyContent: "center",

  paddingTop: "60px",
})
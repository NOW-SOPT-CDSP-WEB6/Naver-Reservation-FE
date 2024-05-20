import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const header = css({
  display: "flex",
  alignItems: "center",

  gap: "6px",
  paddingBottom: "8px",
});

export const title = css({
  fontSize: "18px",
  fontWeight: 600
})
export const tag = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "30px",
  height: "18px",
  padding: "2px",

  borderRadius: "100px",
  backgroundColor: Theme.color.black,
  color: Theme.color.white,

  fontSize: "12px",
  fontWeight: 600,
  lineHeight: "160%"
})

export const detail = css({
  color: Theme.color.mediumGray,

  paddingBottom: "22px",

  lineHeight: "19.6px",
  fontWeight: 500,
});

export const carouselWrapper = css({
  display: "flex",
  gap: "38px",
});
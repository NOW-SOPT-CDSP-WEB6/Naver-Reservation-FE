import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const badgeWrapper = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",

  width: "fit-content",
  padding: "6px 14px",
  marginBottom: "6px",

  borderRadius: "6px",
  border: `1px solid ${Theme.color.border}`,

  fontSize: Theme.text.medium.fontSize,
  fontWeight: 400,
  lineHeight: "19.6px",
})
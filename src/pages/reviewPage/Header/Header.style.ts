import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const headerWrapper = css({
    width: "100%",
    padding: "24px 38px 21px 17px",

    backgroundColor: Theme.color.white,
});

export const headerTitle = css({
  marginBottom: "14px",
  fontSize: "20px",
});

export const detailList = css({
  display: "flex",
  alignItems: "flex-start",

  marginBottom: "4px",

  fontSize: "14px",
});

export const detailIcon = css({
  alignSelf: "start",
  marginRight: "6px",

  fontSize: "12px",
});

export const mainDetail = css({
  color: Theme.color.darkgray,
});
export const subDetail = css({
  color: Theme.color.mediumGray,
});
export const badgeWrapper = css({
  display: "flex",
  gap: "4px",

  marginTop: "9px"
});
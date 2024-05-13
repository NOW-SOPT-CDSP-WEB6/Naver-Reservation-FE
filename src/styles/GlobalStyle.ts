/** Global Style 선언 */
import { css } from "@emotion/react";
import "./fonts.css";

export const GlobalStyle = css({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",

    display: "flex",
  },

  "ul, ol, li": {
    listStyle: "none",
  },

  "html, body": {
    fontFamily: `Pretendard-Medium`,
    fontSize: "18px",
  },

});
/** Global Style 선언 */
import { css } from '@emotion/react';

import { fontStyle } from '@/styles/fonts';

export const GlobalStyle = css`
  ${fontStyle}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html,
  body {
    font-family: Pretendard-Medium;
    font-size: 18px;
  }
`;

import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

type ButtonVariantType = 'back' | 'next' | 'review';

export const BtnStyle = (variant:ButtonVariantType) => css`
    width: 100%;
    height: 100%;
    
    padding: 10px 44px;

    border-radius: 8px;
    border-width: 0;

    color: ${variant === 'next' && "white"};
    background-color: ${variant === 'back' ? null:
                        variant === 'next' ? Theme.color.blue300:
                        Theme.color.gray100 };
`;


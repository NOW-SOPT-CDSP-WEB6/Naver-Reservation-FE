import { IButtonProps } from "@/components/@common/Button/Button";
import { Theme } from "@/styles/theme";
import { css } from "@emotion/react";

export const BtnStyle = ({variant, size}:IButtonProps) => css`
    display: flex;
    justify-content: center;
    text-align: center;
    
    width: 100%;
    height: 100%;
    
    padding: 10px 44px;

    border-radius: 8px;
    border-width: 0;

    color: ${variant === 'review' ? Theme.color.gray600 : "white"};
    background-color: ${variant === 'review' ? Theme.color.gray100 : Theme.color.blue300};
`;


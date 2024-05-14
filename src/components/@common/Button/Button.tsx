import { btnSize, btnStyle, btnVariant } from "@/components/@common/Button/Button.style";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

export interface IButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'next' | 'review' | 'look';
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    icon?: ReactElement;
}

const Button = ({ variant = 'next', children, size='medium', icon}: IButtonProps) => {
    return (
        <button css={[btnStyle, btnVariant[variant], btnSize[size]]}>
            {icon}
            {children}
        </button>
    );
};

export default Button;
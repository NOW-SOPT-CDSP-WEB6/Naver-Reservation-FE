import { btnSize, btnStyle, btnVariant } from "@/components/@common/Button/Button.style";
import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

export interface IButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'next' | 'review' | 'look';
    children?: ReactNode;
    size?: 'small' | 'medium' | 'large';
    Icon?: ReactElement;
}

const Button = ({ variant = 'next', children, size='medium', Icon}: IButtonProps) => {
    return (
        <button css={[btnStyle, btnVariant[variant], btnSize[size]]}>
            {Icon}
            {children}
        </button>
    );
};

export default Button;
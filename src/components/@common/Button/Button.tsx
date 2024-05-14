import { BtnStyle } from "@/components/@common/Button/Button.style";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'back' | 'next' | 'review',
    children: ReactNode,
    size?: 'small' | 'medium';
}

const Button = ({ variant, children, size }: IButtonProps) => {
    const renderIcon = () => {
        // if (variant === 'back') {
        //     return <BackIcon />;
        // } else if (variant === 'review') {
        //     return <ReviewIcon />;
        // }
        return null;
    }
    return (
        <button css={BtnStyle(variant)}>
            {renderIcon()}
            {children}
        </button>
    );
};

export default Button;
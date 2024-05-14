import { btnSize, btnStyle, btnVariant } from "@/components/@common/Button/Button.style";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps  extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'next' | 'review' | 'look';
    children?: ReactNode;
    size?: 'small' | 'medium';
    Icon?: null | React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Button = ({ variant = 'next', children, size='small', Icon=null }: IButtonProps) => {
    return (
        <button css={[btnStyle, btnVariant[variant], btnSize[size]]}>
            {Icon && <Icon/>}
            {children}
        </button>
    );
};

export default Button;
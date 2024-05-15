import { badgeStyle, customStyle } from "@/components/@common/Badge/Badge.style";
import { ReactNode } from "react";

interface BadgeProps {
    size: "default" | "small",
    children?: ReactNode,
}

const Badge = ({size, children}: IBadgeProps) => {
  return (
    <div css={[badgeStyle, customStyle[size]]}>
        {children}
    </div>
  );
};

export default Badge;
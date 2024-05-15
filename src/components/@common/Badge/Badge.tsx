import { badgeStyle } from "@/components/@common/Badge/Badge.style";
import { ReactNode } from "react";

interface BadgeProps {
    size: "default" | "small",
    children?: ReactNode,
}

const Badge = ({size, children}: BadgeProps) => {
  return (
    <div css={badgeStyle[size]}>
        {children}
    </div>
  );
};

export default Badge;
import { badgeStyle } from "@/components/@common/Badge/Badge.style";
import { ReactNode } from "react";

interface IBadgeProps {
    size: "default" | "small",
    children?: ReactNode,
}

const Badge = ({size, children}: IBadgeProps) => {
  return (
    <div css={badgeStyle[size]}>
        {children}
    </div>
  );
};

export default Badge;
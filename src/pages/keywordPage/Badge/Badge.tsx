import { badgeWrapper } from "@/pages/keywordPage/Badge/Badge.style";
import { ReactNode } from "react";

interface BadgeProps {
  children?: ReactNode;
}

const Badge = ({children}: BadgeProps) => {
  return (
    <div css={badgeWrapper}>{children}</div>
  );
};

export default Badge;
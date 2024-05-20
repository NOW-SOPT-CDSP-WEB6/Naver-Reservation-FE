import { badgeWrapper } from "@/pages/keywordPage/Badge/Badge.style";
import { ReactNode, useState } from "react";

interface BadgeProps {
  children?: ReactNode;
}

const Badge = ({children}: BadgeProps) => {
  const [isClick, setIsClick] = useState(false);
  return (
    <div css={badgeWrapper(isClick)} onClick={() => setIsClick(p => !p)}>
      {children}
    </div>
  );
};

export default Badge;
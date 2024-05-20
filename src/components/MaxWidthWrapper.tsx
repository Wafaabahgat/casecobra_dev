import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface MaxWidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full h-full mx-auto px-2.5 md:px-20 max-w-screen-xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  imgSrc: string;
}

const Phone: FC<PhoneProps> = ({
  className,
  dark = false,
  imgSrc,
  ...props
}) => {
  return (
    <div
      className={cn(
        "z-50 overflow-hidden relative pointer-events-none",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img
          className="object-cover min-w-full min-h-full"
          src={imgSrc}
          alt="overlaying phone image"
        />
      </div>
    </div>
  );
};

export default Phone;

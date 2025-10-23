"use client";

import { cn } from "@/lib/utils";

interface buttonProps {
  title: string;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "outline";
}

export function Button({
  href,
  title,
  className,
  onClick,
  variant,
}: buttonProps) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={cn(
        "cursor-pointer rounded bg-[#F9B233] px-4 py-2 font-bold text-white hover:bg-[#F9B233]/90",
        variant === "outline" &&
          "border border-[#F9B233] bg-white text-[#F9B233] hover:text-white",

        className,
      )}
    >
      {title}
    </a>
  );
}

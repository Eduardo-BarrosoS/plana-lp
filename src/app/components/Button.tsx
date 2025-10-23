"use client";

interface buttonProps {
  title: string;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Button({ href, title, className, onClick }: buttonProps) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`cursor-pointer rounded bg-[#F9B233] px-4 py-2 font-bold text-white hover:bg-[#F9B233]/90 ${className}`}
    >
      {title}
    </a>
  );
}

"use client";

interface buttonProps {
  title: string;
  className?: string;
}

export function Button({ title, className }: buttonProps) {
  return (
    <button
      className={`bg-[#F9B233] hover:bg-[#F9B233]/90 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {title}
    </button>
  );
}

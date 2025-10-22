"use client";

interface buttonProps {
  title: string;
  className?: string;
  onClick?: () => void; // Add onClick prop
}

export function Button({ title, className, onClick }: buttonProps) {
  return (
    <button
      onClick={onClick} // Pass onClick to the button element
      className={`rounded bg-[#F9B233] px-4 py-2 font-bold text-white hover:bg-[#F9B233]/90 ${className}`}
    >
      {title}
    </button>
  );
}

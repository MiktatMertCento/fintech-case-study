import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button({ className = "", label, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full bg-[#CDDF39] hover:bg-[#c3d43b] text-slate-900 font-bold text-lg py-3 rounded-xl transition-all duration-200 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-sm cursor-pointer ${className}`}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;

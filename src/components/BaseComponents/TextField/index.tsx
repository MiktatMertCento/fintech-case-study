import React from "react";

import { cn } from "lib/utils";

interface TextFieldProps extends React.ComponentProps<"input"> {
  label?: string;
  error?: string;
  className?: string;
}

function TextField({ label, error, className, ...props }: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-semibold">{label}</label>}

      <input
        className={cn(
          "flex h-12 w-full rounded-xl border border-gray-200 bg-ftBackground px-4 py-2 font-medium text-sm placeholder:text-text3Color focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />

      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
}

export default TextField;

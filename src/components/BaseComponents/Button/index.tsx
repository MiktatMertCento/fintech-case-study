import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  loading?: boolean;
}

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

function Button({
  className = "",
  label,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const isButtonDisabled = disabled || loading;

  return (
    <button
      className={`relative flex items-center justify-center w-full bg-primaryColor hover:bg-primaryColor font-bold text-lg py-3 rounded-xl transition-all duration-200 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed shadow-sm cursor-pointer disabled:active:scale-100 ${className}`}
      disabled={isButtonDisabled}
      aria-busy={loading}
      {...props}
    >
      <span
        className={`transition-opacity duration-200 ${
          loading ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        {label}
      </span>

      {loading && (
        <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <LoadingSpinner />
        </span>
      )}
    </button>
  );
}

export default Button;

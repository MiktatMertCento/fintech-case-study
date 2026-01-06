import React from "react";

interface GoogleLoginButtonProps {
  label: string;
}

function GoogleLoginButton(props: GoogleLoginButtonProps) {
  const { label } = props;

  return (
    <button
      type="button"
      disabled
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-ftBackground py-3 text-md font-bold text-text3Color hover:bg-ftBackground transition-colors"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="h-5 w-5"
        alt="Google"
      />
      {label}
    </button>
  );
}

export default GoogleLoginButton;

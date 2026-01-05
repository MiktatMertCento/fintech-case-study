import React from "react";

function GoogleLoginButton() {
  return (
    <button
      type="button"
      disabled
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white py-3 text-md font-bold text-gray-500 hover:bg-gray-50 transition-colors"
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        className="h-5 w-5"
        alt="Google"
      />
      Sign in with google
    </button>
  );
}

export default GoogleLoginButton;

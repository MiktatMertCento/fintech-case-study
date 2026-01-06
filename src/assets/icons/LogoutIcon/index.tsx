import React from "react";

const LogoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.565 10.058a.63.63 0 0 1 .625-.625h4.567v-7.05a.724.724 0 0 0-.725-.716c-4.908 0-8.333 3.425-8.333 8.333s3.425 8.333 8.333 8.333a.717.717 0 0 0 .717-.716v-6.942H7.19a.612.612 0 0 1-.625-.617Z"
      fill="currentColor"
    />
    <path
      d="m17.118 9.617-2.367-2.375a.629.629 0 0 0-.883 0 .629.629 0 0 0 0 .883l1.3 1.3h-3.417v1.25h3.409l-1.3 1.3a.629.629 0 0 0 0 .883.618.618 0 0 0 .441.184.618.618 0 0 0 .442-.184l2.367-2.375a.601.601 0 0 0 .008-.866Z"
      fill="currentColor"
    />
  </svg>
);

export default LogoutIcon;

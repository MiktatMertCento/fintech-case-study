import React from "react";

import { cn } from "lib/utils";

function FintechLogo(props: { className?: string }) {
  const { className } = props;

  return (
    <img
      alt="Fintech Logo"
      src="/images/Fintech.svg"
      className={cn("h-auto w-auto", className)}
    />
  );
}

export default FintechLogo;

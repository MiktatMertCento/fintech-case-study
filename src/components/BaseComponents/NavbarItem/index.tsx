import React from "react";

import { cn } from "lib/utils";

interface NavbarItemProps {
  title: string;
  active: boolean;
  Icon: React.ElementType;
}

function NavbarItem(props: NavbarItemProps) {
  const { Icon, title, active } = props;

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-3 pl-4 py-3.5 rounded-lg font-medium cursor-pointer text-text2Color",
        active && "bg-primaryColor font-semibold text-text1Color",
      )}
    >
      <Icon
        className={cn("w-5 h-5 text-gray-400", active && "text-text1Color")}
      />

      <h1 className="select-none">{title}</h1>
    </div>
  );
}

export default NavbarItem;

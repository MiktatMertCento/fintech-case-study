import React from "react";

import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import { cn } from "lib/utils";

interface NavbarItemProps {
  title: string;
  path: string;
  Icon: React.ElementType;
}

function NavbarItem(props: NavbarItemProps) {
  const { Icon, title, path } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const active = path === location.pathname;

  const handleNavigatePath = () => {
    navigate(path);
  };

  return (
    <button
      className={cn(
        "group relative flex w-full flex-row items-center gap-3 rounded-lg pl-4 py-3.5 font-medium cursor-pointer transition-colors",
        active
          ? "text-text1Color font-semibold"
          : "text-text2Color hover:text-text3Color",
      )}
      onClick={handleNavigatePath}
    >
      {active && (
        <motion.div
          layoutId="active-nav-background"
          className="absolute inset-0 rounded-lg bg-primaryColor"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.5,
          }}
        />
      )}

      <div className="relative z-10 flex items-center gap-3">
        <Icon
          className={cn(
            "w-5 h-5 transition-colors",
            active
              ? "text-text1Color"
              : "text-text2Color group-hover:text-text3Color",
          )}
        />

        <h1 className="select-none">{title}</h1>
      </div>
    </button>
  );
}

export default NavbarItem;

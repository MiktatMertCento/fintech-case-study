import React, {useState} from "react";

import {motion, useMotionValueEvent, useScroll} from "framer-motion";

import {UserProfileDropDown} from "components";

import {MenuIcon, NotificationIcon, SearchIcon} from "assets/icons";

interface TopBarProps {
    onMenuClick?: () => void;
}

function TopBar({onMenuClick}: TopBarProps) {
    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 50) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.div
            variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className="sticky top-0 z-30 w-full bg-white pt-7 pb-2"
        >
            <div className="flex w-full h-12 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                    <button
                        type="button"
                        onClick={onMenuClick}
                        className="cursor-pointer lg:hidden text-text2Color"
                    >
                        <MenuIcon className="w-6 h-6"/>
                    </button>

                    <h1 className="font-semibold text-xl md:text-2xl">Dashboard</h1>
                </div>

                <div className="flex flex-row items-center gap-4 md:gap-11">
                    <SearchIcon className="text-text2Color w-6 h-6 shrink-0 cursor-pointer"/>

                    <NotificationIcon className="text-text2Color w-6 h-6 shrink-0 cursor-pointer"/>

                    <UserProfileDropDown/>
                </div>
            </div>
        </motion.div>
    );
}

export default TopBar;

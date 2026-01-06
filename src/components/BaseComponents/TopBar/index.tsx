import { UserProfileDropDown } from "components";

import { NotificationIcon, SearchIcon } from "assets/icons";

function TopBar() {
  return (
    <div className="w-full h-12 flex flex-row justify-between items-center">
      <h1 className="font-semibold text-xl md:text-2xl">Dashboard</h1>

      <div className="flex flex-row items-center gap-4 md:gap-11">
        <SearchIcon className="text-text2Color w-6 h-6 shrink-0 cursor-pointer" />

        <NotificationIcon className="text-text2Color w-6 h-6 shrink-0 cursor-pointer" />

        <UserProfileDropDown />
      </div>
    </div>
  );
}

export default TopBar;

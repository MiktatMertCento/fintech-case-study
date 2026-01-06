import DropdownIcon from "assets/icons/DropdownIcon";
import { useAppContext } from "context";

function UserProfileDropDown() {
  const { user } = useAppContext();

  return (
    <div className="flex flex-row items-center select-none cursor-pointer">
      <img
        src="/images/user-profile.jpg"
        alt="user profile"
        className="w-9 h-9 rounded-full"
      />

      <h1 className="font-semibold ml-3">{user?.fullName}</h1>

      <DropdownIcon className="w-3 h-3 ml-7" />
    </div>
  );
}

export default UserProfileDropDown;

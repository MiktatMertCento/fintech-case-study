import { NavbarItem } from "components";

import {
  DashboardIcon,
  HelpIcon,
  InvoicesIcon,
  LogoutIcon,
  MyWalletsIcon,
  SettingsIcon,
  TransactionsIcon,
} from "assets/icons";

function Navbar() {
  return (
    <nav className="mt-10 flex flex-1 flex-col px-6">
      <div className="flex flex-col gap-y-2">
        <NavbarItem title="Dashboard" Icon={DashboardIcon} active />
        <NavbarItem
          title="Transactions"
          Icon={TransactionsIcon}
          active={false}
        />
        <NavbarItem title="Invoices" Icon={InvoicesIcon} active={false} />
        <NavbarItem title="My Wallets" Icon={MyWalletsIcon} active={false} />
        <NavbarItem title="Settings" Icon={SettingsIcon} active={false} />
      </div>

      <div className="mt-auto flex flex-col gap-y-2">
        <NavbarItem title="Help" Icon={HelpIcon} active={false} />
        <NavbarItem title="Logout" Icon={LogoutIcon} active={false} />
      </div>
    </nav>
  );
}

export default Navbar;

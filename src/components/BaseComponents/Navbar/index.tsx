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
        <NavbarItem title="Dashboard" path="/dashboard" Icon={DashboardIcon} />

        <NavbarItem
          title="Transactions"
          path="/transactions"
          Icon={TransactionsIcon}
        />

        <NavbarItem title="Invoices" path="/invoices" Icon={InvoicesIcon} />

        <NavbarItem
          title="My Wallets"
          path="/my-wallets"
          Icon={MyWalletsIcon}
        />

        <NavbarItem title="Settings" path="/settings" Icon={SettingsIcon} />
      </div>

      <div className="mt-auto flex flex-col gap-y-2">
        <NavbarItem title="Help" path="/help" Icon={HelpIcon} />

        <NavbarItem title="Logout" path="/logout" Icon={LogoutIcon} />
      </div>
    </nav>
  );
}

export default Navbar;

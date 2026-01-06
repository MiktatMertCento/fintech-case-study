import React from "react";

import { FintechLogo, Navbar, TopBar } from "components";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-row bg-white">
      <aside className="flex w-64 shrink-0 flex-col bg-grayBackground pt-7 pb-24">
        <div className="pl-6">
          <FintechLogo className="w-28" />
        </div>

        <Navbar />
      </aside>

      <main className="flex flex-1 flex-col px-10 pt-7">
        <TopBar />

        <div className="mt-8 h-full w-full">{children}</div>
      </main>
    </div>
  );
}

export default Layout;

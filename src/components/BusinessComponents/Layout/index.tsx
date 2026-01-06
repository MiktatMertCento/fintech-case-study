import React from "react";

import { LenisOptions } from "lenis";
// TODO: Bu paket dahili olarak yüklü olmasına rağmen yokmuş gibi davranıyor.
// eslint-disable-next-line import/extensions
import ReactLenis from "lenis/react";

import { FintechLogo, Navbar, TopBar } from "components";

const lenisOptions: LenisOptions = {
  lerp: 0.1,
  duration: 1,
  smoothWheel: true,
};

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <ReactLenis root options={lenisOptions}>
      <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
        <aside className="flex w-full shrink-0 flex-col bg-grayBackground pt-7 pb-8 lg:h-auto lg:w-64 lg:pb-24">
          <div className="pl-6">
            <FintechLogo className="w-28" />
          </div>

          <Navbar />
        </aside>

        <main className="flex flex-1 flex-col px-4 pt-7 lg:px-10">
          <TopBar />

          <div className="mt-8 h-full w-full">{children}</div>
        </main>
      </div>
    </ReactLenis>
  );
}

export default Layout;

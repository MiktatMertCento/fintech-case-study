import React, { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { LenisOptions } from "lenis";
// TODO: Bu paket dahili olarak yüklü olmasına rağmen yokmuş gibi davranıyor.
// eslint-disable-next-line import/extensions
import ReactLenis from "lenis/react";

import { FintechLogo, Navbar, TopBar } from "components";

import { CloseIcon } from "assets/icons";

const lenisOptions: LenisOptions = {
  lerp: 0.1,
  duration: 1,
  smoothWheel: true,
};

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
        <aside className="hidden lg:flex w-full shrink-0 flex-col bg-grayBackground pt-7 pb-8 lg:h-screen lg:w-64 lg:pb-24">
          <div className="pl-6">
            <FintechLogo className="w-28" />
          </div>

          <Navbar />
        </aside>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 z-50 flex flex-col bg-grayBackground lg:hidden"
            >
              <div className="flex items-center justify-between px-6 pt-7 pb-4">
                <FintechLogo className="w-28" />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-text2Color cursor-pointer"
                >
                  <CloseIcon className="w-8 h-8" />
                </button>
              </div>

              <div className="flex flex-1 flex-col overflow-y-auto pb-8" onClick={() => setIsMobileMenuOpen(false)}>
                <Navbar />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex flex-1 flex-col px-4 lg:px-10">
          <TopBar onMenuClick={() => setIsMobileMenuOpen(true)} />

          <div className="mt-8 h-full w-full">{children}</div>
        </main>
      </div>
    </ReactLenis>
  );
}

export default Layout;

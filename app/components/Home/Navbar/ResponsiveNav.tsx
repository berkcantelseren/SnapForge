"use client";

import { useState } from "react";
import { MobileNavbar } from "./MobileNav";
import { Navbar } from "./Navbar";

export const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => setShowNav(true);
  const closeNav = () => setShowNav(false);

  return (
    <div>
      <Navbar openNav={openNav} />
      <MobileNavbar showNav={showNav} closeNav={closeNav} />
    </div>
  );
};

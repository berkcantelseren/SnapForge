import { navLinks } from "@/constant/constant";
import Link from "next/link";

export const MobileNavbar = () => {
  return (
    <div>
      {/* Overlay Section For Hamburger */}
      <div className="fixed inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen"></div>
      {/* NavLinks Mobile */}
      <div className="text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#800020] space-y-6 z-[1050]">
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p>{link.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

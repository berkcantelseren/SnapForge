import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type NavProps = {
  showNav: boolean;
  closeNav: () => void;
};

export const MobileNavbar = ({ closeNav, showNav }: NavProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay Section For Hamburger */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* NavLinks Mobile */}
      <div
        className={`text-white ${navOpen}  fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#800020] space-y-6 z-[1050]`}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] m1-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Closing Icon For Hamburger */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

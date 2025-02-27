import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { GiGearHammer } from "react-icons/gi";
import { HiBars3, HiBars3BottomRight } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[100] fixed w-full">
      <div className="flex items-center h-full justify-between w-[90%] xl:w[80%] mx-auto">
        {/* {SnapForge Logo} */}
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center flex-col">
            <GiGearHammer className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-[#800020] font-bold">
            SnapForge
          </h1>
        </div>
        {/* {NavLinks} */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="text-black hover:text-[#9B2D2F] font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* {Buttons} */}
        <div className="flex items-center space-x-4">
          <a
            href="#_"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-[#800020] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#800020] group-hover:bg-[#800020]"></span>
            <span className="relative text-[#800020] group-hover:text-white">
              Create Account
            </span>
          </a>
          {/* {Burger Menu For Mobile} */}
          <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-black lg:hidden" />
        </div>
      </div>
    </div>
  );
};

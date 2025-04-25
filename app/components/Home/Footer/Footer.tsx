import Link from "next/link";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="pt-16 pb-16 bg-[#f4f4f4]">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1st Section Footer  */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Report a Bug
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            System Status
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Ticket Submission
          </p>
        </div>
        {/* 2st Section Footer  */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Press & Media
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Terms of Service
          </p>
        </div>
        {/* 3st Section Footer  */}
        <div className="space-y-5">
          <h1 className="text-lg font-bold">Resources</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Help Center
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Partnerships
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Community
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-[#9B2D2F]">
            Setup Example
          </p>
        </div>
        {/* 4st Section Footer  */}
        <div>
          <h1 className="text-lg font-bold">Contact Us</h1>
          <div className="mt-6">
            <h1 className="text-sm text-[#9B2D2F]">Our Number</h1>
            <h1 className="font-bold text-gray-800">+0123 456 789</h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-[#9B2D2F]">Our Email</h1>
            <h1 className="font-bold text-gray-800">snapforge@gmail.com</h1>
          </div>
        </div>
      </div>
      {/* Bottom Part Footer  */}
      <div
        id="contact"
        className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm"
      >
        <p className="text-center md:text-left">
          Copyright © 2025{" "}
          <Link href="https://www.linkedin.com/in/berkcantelseren/">
            <span className="font-bold text-gray-800 cursor-pointer mr-1 hover:text-[#800020] hover:underline hover:underline-offset-4">
              @pyrismarift
            </span>
          </Link>
          All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Our Socials:</span>
          <span className="text-[#FE089A] transition-transform duration-200 ease-in-out transform hover:scale-120 will-change-transform">
            <FaSquareInstagram className="w-6 h-6 cursor-pointer" />
          </span>
          <span className="text-black transition-transform duration-200 ease-in-out transform hover:scale-120 will-change-transform">
            <FaSquareXTwitter className="w-6 h-6 cursor-pointer" />
          </span>
          <span className="text-[#0A78B5] transition-transform duration-200 ease-in-out transform hover:scale-120 will-change-transform">
            <FaLinkedin className="w-6 h-6 cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
}

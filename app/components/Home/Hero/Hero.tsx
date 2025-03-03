import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export const Hero = () => {
  return (
    <div
      className="relative w-full h-[110vh] sm:h-screen flex justify-center flex-col"
      data-aos="fade-right"
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content Part */}
        <div data-aos="fade-up">
          <p className="text-sm sm:text-base md:text-xl font-bold text-[#800020]">
            Optimize Your Workflow
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-[#800020] leading-tight">
            Automate, Improve, and Grow Faster with
            <span className="text-[#6D63FF] ml-2 custom-selection-1">
              SnapForge
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-800">
            SnapForge is the key to unlocking your businesses full potential. By
            automating workflows and integrating essential tools, it allows your
            team to work more efficiently, eliminate bottlenecks, and focus on
            strategic growth. SnapForge brings intelligent automation to your
            fingertips, making business optimization easier and faster than ever
            before.
          </p>
          {/* Ratings Google - LinkedIn */}
          <div className="flex sm:flex-row flex-col sm-items-center sm:space-x-10 mt-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/google.png"
                alt="Google Logo"
                width={45}
                height={45}
                className="select-none"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.5
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <BsStarHalf className="w-4 h-4 text-yellow-500 " />
                  </div>
                </div>
                <p className="text-gray-700 text-sm font-bold sm:text-base">
                  Best Rated on Google
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-5 sm:mt-0 ">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn Logo"
                width={45}
                height={45}
                className="select-none"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.7
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <FaStar className="w-4 h-4 text-yellow-500 " />
                    <BsStarHalf className="w-4 h-4 text-yellow-500 " />
                  </div>
                </div>
                <p className="text-gray-700 text-sm font-bold sm:text-base">
                  Best Rated on LinkedIn
                </p>
              </div>
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#800020] rounded-md hover:bg-[#9B2D2F] sm:w-auto sm:mb-0"
              data-primary="green-400"
              data-rounded="rounded-2xl"
              data-primary-reset="{}"
            >
              Start Free Trial
            </a>
            {/* Button 2 */}
            <a
              href="#_"
              className="inline-flex custom-selection-1 items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#6D63FF] rounded-md hover:bg-[#7a71ff] sm:w-auto sm:mb-0"
              data-primary="green-400"
              data-rounded="rounded-2xl"
              data-primary-reset="{}"
            >
              Get Started
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/* Image Content Part */}
        <div className="mx-auto hidden xl:block">
          <Image
            src="/images/hero.png"
            alt="Dev productivity image"
            width={900}
            height={900}
            className="select-none"
          />
        </div>
      </div>
    </div>
  );
};

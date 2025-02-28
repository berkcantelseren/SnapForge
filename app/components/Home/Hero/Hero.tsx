import Image from "next/image";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content Part */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-[#800020]">
            Optimize Your Workflow
          </p>
          <h1 className="text 2xl md:text-3xl lg:text-4xl mt-6 mb-6 font-bold text-[#800020] leading-[2.5rem] md:leading-[3.5rem]">
            Automate, Improve, and Grow Faster with{" "}
            <span className="text-[#424242] ml-2">SnapForge</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-bold text-[#424242]">
            SnapForge is the key to unlocking your business's full potential. By
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
                width={40}
                height={40}
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
              </div>
            </div>
          </div>
        </div>
        {/* Image Content Part */}
        <div></div>
      </div>
    </div>
  );
};

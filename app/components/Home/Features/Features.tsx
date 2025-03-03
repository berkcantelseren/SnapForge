import Image from "next/image";
import { AiOutlineApi } from "react-icons/ai";
import { FaArrowsRotate, FaChartLine, FaPalette } from "react-icons/fa6";

export const Features = () => {
  return (
    <div
      id="features"
      className="pt-16 pb-16 bg-[#f4f4f4]"
      data-aos="fade-left"
    >
      <div>
        <h1 className="text-center text-2xl font-bold text-gray-800 custom-selection-3">
          Why Choose SnapForge?
        </h1>
        <p className="mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto">
          SnapForge simplifies your workflow by automating repetitive tasks,
          boosting efficiency, and helping your business scale effortlessly with
          AI-powered solutions.
        </p>
      </div>
      {/* Grid Section */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center ">
        {/* Inner Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* 1st Box */}
          <div className="bg-white p-4 rounded-lg ">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-[#9B2D2F] ">
                <FaArrowsRotate className="text-white w-6 h-6" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700 custom-selection-3">
                Workflow Automation
              </h1>
            </div>
            {/* Info */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Automate repetitive tasks and streamline operations, allowing your
              team to focus on strategic growth.
            </p>
          </div>
          {/* 2st Box */}
          <div className="bg-white p-4 rounded-lg ">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-[#9B2D2F] ">
                <FaChartLine className="text-white w-6 h-6" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700 custom-selection-3">
                Process Optimization
              </h1>
            </div>
            {/* Info */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Boost efficiency with AI-driven insights that eliminate
              bottlenecks and enhance productivity.
            </p>
          </div>
          {/* 3st Box */}
          <div className="bg-white p-4 rounded-lg ">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-[#9B2D2F] ">
                <AiOutlineApi className="text-white w-6 h-6" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700 custom-selection-3">
                Seamless Integrations
              </h1>
            </div>
            {/* Info */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Connect with your favorite apps and services effortlessly,
              ensuring a smooth workflow across all tools.
            </p>
          </div>
          {/* 4st Box */}
          <div className="bg-white p-4 rounded-lg ">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-[#9B2D2F] ">
                <FaPalette className="text-white w-6 h-6" />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700 custom-selection-3">
                Custom Templates
              </h1>
            </div>
            {/* Info */}
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Use pre-built templates or customize your own to fit your business
              needs and streamline operations.
            </p>
          </div>
        </div>
        {/* Image Grid Section */}
        <div>
          <Image
            src="/images/features.png"
            alt="features image"
            width={700}
            height={700}
            className="select-none"
          />
        </div>
      </div>
    </div>
  );
};

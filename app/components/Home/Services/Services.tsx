import { FaRocket } from "react-icons/fa6";
import BoxText from "../../Helper/BoxText";

export const Services = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[80%] mx-auto">
        <BoxText>Our Services</BoxText>
        {/* Heading  */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          SnapForge Made For You?
        </h1>
        {/* Info */}
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:w[60%] lg:w[50%] text-gray-700 ">
          SnapForge is designed to optimize workflows and drive efficiency
          across various industries. Whether you're a startup, a growing
          business, or a large enterprise, our platform offers solutions to help
          everyone!
        </p>
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/* 1st Service Section  */}
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <FaRocket className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

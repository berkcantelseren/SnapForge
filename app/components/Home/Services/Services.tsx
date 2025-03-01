import { FaRocket, FaTwitch, FaUserClock } from "react-icons/fa6";
import BoxText from "../../Helper/BoxText";
import {
  MdBusinessCenter,
  MdOutlineContactSupport,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";

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
            {/* Icon Section  */}
            <div className="w-14 h-14 min-h-[3rem] min-w-[3.5rem] rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <FaRocket className="text-white w-6 h-6" />
            </div>
            {/* Text Section  */}
            <div>
              <p className="text-lg font-bold text-gray-800">Start Up</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, nostrum perspiciatis?
              </p>
            </div>
          </div>
          {/* 2st Service Section  */}
          <div className="flex items-center space-x-5">
            {/* Icon Section  */}
            <div className="w-14 h-14 min-h-[3rem] min-w-[3.5rem] rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <FaUserClock className="text-white w-6 h-6" />
            </div>
            {/* Text Section  */}
            <div>
              <p className="text-lg font-bold text-gray-800">
                Full-Time Access
              </p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, nostrum perspiciatis?
              </p>
            </div>
          </div>
          {/* 3st Service Section  */}
          <div className="flex items-center space-x-5">
            {/* Icon Section  */}
            <div className="w-14 h-14 min-h-[3rem] min-w-[3.5rem] rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <BsBuildingsFill className="text-white w-6 h-6" />
            </div>
            {/* Text Section  */}
            <div>
              <p className="text-lg font-bold text-gray-800">Agencies</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, nostrum perspiciatis?
              </p>
            </div>
          </div>
          {/* 4st Service Section  */}
          <div className="flex items-center space-x-5">
            {/* Icon Section  */}
            <div className="w-14 h-14 min-h-[3rem] min-w-[3.5rem] rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <MdBusinessCenter className="text-white w-6 h-6" />
            </div>
            {/* Text Section  */}
            <div>
              <p className="text-lg font-bold text-gray-800">Business</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, nostrum perspiciatis?
              </p>
            </div>
          </div>
          {/* 5st Service Section  */}
          <div className="flex items-center space-x-5">
            {/* Icon Section  */}
            <div className="w-14 h-14 min-h-[3rem] min-w-[3.5rem] rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <MdOutlineContactSupport className="text-white w-6 h-6" />
            </div>
            {/* Text Section  */}
            <div>
              <p className="text-lg font-bold text-gray-800">7/24 Support</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, nostrum perspiciatis?
              </p>
            </div>
          </div>
          {/* 6st Service Section  */}
          <div className="flex items-center space-x-5">
            {/* Icon Section  */}
            <div className="w-14 h-14 min-h-[3rem] min-w-[3.5rem] rounded-md flex items-center justify-center flex-col bg-[#9B2D2F]">
              <FaTwitch className="text-white w-6 h-6" />
            </div>
            {/* Text Section  */}
            <div>
              <p className="text-lg font-bold text-gray-800">Streamers</p>
              <p className="text-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, nostrum perspiciatis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

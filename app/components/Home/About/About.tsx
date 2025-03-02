import Image from "next/image";
import BoxText from "../../Helper/BoxText";

export const About = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Image Content */}
        <div>
          <Image
            src="/images/about.png"
            alt="File Search Image"
            width={600}
            height={600}
            className="select-none"
          />
        </div>
        {/* Text Content */}
        <div>
          <BoxText>About Us</BoxText>
          <h1 className="text-2xl sm:text-3xl font-bold custom-selection-3 text-gray-800 mt-3 leading-[2.5rem] sm:leading-[3rem]">
            Optimizing Your Business With Automation
          </h1>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            SnapForge is dedicated to helping businesses improve efficiency by
            automating their daily operations. Our intuitive platform enables
            teams to focus on more strategic tasks while the repetitive work is
            handled seamlessly through automation, increasing productivity.
          </p>
          <button className="mt-5 text-[#800020] font-bold pb-1 border-b-2 border-[#800020] cursor-pointer">
            Learn More &#8594;
          </button>
          <div className="mt-8 border-l-2 border-gray-200">
            <div className="ml-6">
              <p className="text-gray-800 font-bold">
                "SnapForge took the burden of manual work off our shoulders and
                improved our teams performance."
              </p>
              <div className="flex items-center space-x-6 mt-6">
                <Image
                  src="/images/pp3.png"
                  alt="profile picture of social media manager"
                  width={60}
                  height={60}
                  className="rounded-full select-none"
                />
                <div>
                  <p className="font-medium">Robert Downson</p>
                  <p className="text-gray-700 text-sm">
                    Social Media Specialist @RoboChef
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

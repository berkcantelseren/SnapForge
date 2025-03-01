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
      </div>
    </div>
  );
};

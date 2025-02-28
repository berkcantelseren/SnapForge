import React from "react";

type Props = {
  children: React.ReactNode;
};

const BoxText = ({ children }: Props) => {
  return (
    <div>
      <h1 className="w-fit py-1 text-[#800020] font-bold">{children}</h1>
    </div>
  );
};

export default BoxText;

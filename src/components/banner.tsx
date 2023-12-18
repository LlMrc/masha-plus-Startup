
import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-end items-center bg-section-img bg-contain bg-no-repeat  my-0 mx-[auto]   h-[350px] ">
      <div className="flex items-center justify-center p-4 gap-4 h-[200px] flex-col mr-[200px] bg-slate-200">
        <p className="text-[#050038] text-center [font-family:Inter] text-[22px] not-italic font-bold leading-[38px] tracking-[-0.5px]">
          The Ways We Work
        </p>
        <p className="text-[#050038] text-center [font-family:Helvetica] text-lg not-italic font-normal leading-6">
          How has our relationship with work changed?
        </p>
        <div className="border [background:#4262FF]  rounded-[40px] border-solid border-[#4262FF]">
          <p className="text-white  m-2 text-center [font-family:Helvetica] text-sm not-italic font-normal leading-5">
            View the report →
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

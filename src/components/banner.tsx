import React from "react";

const Banner = () => {
  return (
    <div
      className="flex md:justify-end 
    justify-center items-center 
    bg-section-img bg-contain
     bg-no-repeat  my-0 mx-[auto]  
     w-[400px] md:w-3/4

     md:h-[350px] "
    >
      <div className="flex items-center justify-center p-1 md:p-4 md:gap-4 md:h-[200px] flex-col w-2/5 md:mr-[200px] bg-slate-200">
        <p className="text-[#050038] text-center [font-family:Inter] text-lg md:text-[22px] not-italic font-bold leading-[38px] tracking-[-0.5px]">
          The Ways We Work
        </p>
        <p className="text-[#050038] text-center [font-family:Helvetica] text-sm md:text-lg not-italic font-normal leading-6">
          How has our relationship with work changed?
        </p>
        <div className="border [background:#4262FF]   rounded-[40px] border-solid border-[#4262FF]">
          <p className="text-white  md:m-2 my-1 mx-2 text-center [font-family:Helvetica] text-xs md:text-sm not-italic font-normal leading-5">
            View the report →
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

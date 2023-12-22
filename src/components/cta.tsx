import React from "react";

const Cta = () => {
  return (
    <div className="px-5 md:py-[120px] py-6 rounded-[16px] bg-[#050038] my-20 mx-[auto] md:w-2/3 shadow-md">
      <div className=" text-white inline-flex w-full gap-2 flex-col items-center justify-center shadow-md">
        <p className="text-white text-center [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          Join 45M+ users today
        </p>
        <p className="text-[rgba(255,255,255,0.60)] text-center [font-family:Inter] text-lg not-italic font-normal leading-6">
          Start for free — upgrade anytime.
        </p>
        <p className="text-[rgba(255,255,255,0.60)] text-center [font-family:Inter] text-lg not-italic font-normal leading-6">
          Joining as an organization? Contact Sales
        </p>
        <div className="shadow-lg relative overflow-hidden group z-0 text-white inline-flex items-center justify-center p-3 border [background:#4262FF] rounded-3xl border-solid border-white mt-3 hover:text-gray-800">
          <p className="  text-center [font-family:Helvetica] text-lg not-italic font-normal leading-6">
            Sign up free →
          </p>
          <div className="absolute inset-0 bg-white translate-x-full transition-all duration-300 -z-10 ease-in group-hover:translate-x-0" />
        </div>
      </div>
    </div>
  );
};

export default Cta;

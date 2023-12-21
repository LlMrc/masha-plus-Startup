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
        <div className="border p-2 m-2 inline-flex [background:#4262FF] rounded-[32px] border-solid border-[#4262FF]">
          <p className="text-white text-center [font-family:Inter] text-lg not-italic font-normal leading-6">
            Sign up free
          </p>
          <p className="mx-2">→</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;

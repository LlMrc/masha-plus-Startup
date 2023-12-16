import React from "react";
import work from "../../public/images/hybridwork.png";
import Image from "next/image";

const WorkTogether = () => {
  return (
    <div className="inline-flex py-[60px] items-center my-4">
      <div className="w-[550px] h-[264px]">
        <p className="w-[440.7px] text-[#050038] [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          Work together, wherever you work
        </p>
        <p className="w-[453.716px] text-[rgba(5,0,56,0.60)] [font-family:Inter] text-lg not-italic font-normal leading-6">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <span className="inline-flex items-end justify-center gap-[5.016px] my-4 ">
          <span className="flex w-[104.716px] h-[22px] flex-col  text-[#4262FF] justify-center shrink-0 border-b-[#4262FF] border-b border-solid">
            Learn more
          </span>
          <span className="text-[#4262FF]">→</span>
        </span>
      </div>
      <div className="w-[550px] h-[535px]">
        <Image src={work} alt={"hydrate work"} />
      </div>
    </div>
  );
};

export default WorkTogether;

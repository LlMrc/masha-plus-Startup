import Image from "next/image";
import React from "react";
import pc from "../../public/images/integrations_all_integrations.png";

const Connect = () => {
  return (
    <div className="inline-flex py-[60px] w-full px-[50px] items-center justify-between">
      <div className="flex items-start  pr-0 py-[76.813px]">
        <div className="w-[450px] ">
          <Image src={pc} alt={"pc"} />
        </div>
      </div>
      <div className="w-[466px] h-[344px] ">
        <p className="text-[#050038] w-[355px] h-[168px] [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          Connect your tools, close your tabs
        </p>

        <p className="w-[458.934px] text-[rgba(5,0,56,0.60)] [font-family:Inter] text-lg not-italic font-normal leading-6">
          Whether you want to edit your Google Docs, resolve Jira issues, or
          collaborate over Zoom, Miro has 100+ integrations with tools you
          already use and love.
        </p>
        <div className="inline-flex items-end gap-[5px] my-2">
          <p className="  text-[#4262FF] [font-family:Inter] text-lg not-italic font-normal leading-6">
            Learn more
          </p>
          <p className="text-[#4262FF] [font-family:Inter] text-lg not-italic font-normal leading-6">
            →
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;

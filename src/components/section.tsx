import React from "react";
import walmart from "../../public/images/sponsors/walmart.png";
import volvo from "../../public/images/sponsors/volvo.png";
import cisco from "../../public/images/sponsors/cisco.png";
import okta from "../../public/images/sponsors/okta.png";
import deloitte from "../../public/images/sponsors/deloitte.png";
import Image from "next/image";

const SectionPage = () => {
  return (
    <div className="inline-flex py-[60px] justify-center  items-start md:my-14 my-2 relative w-screen">
      <div className="flex  flex-col justify-center items-center gap-[48px]">
        <p className="text-[rgba(5,0,56,0.60)] text-center [font-family:Inter] text-lg not-italic font-normal ">
          Trusted by 45M+ users
        </p>
        <div className="flex overflow-x-hidden h-[92px] gap-2 md:gap-10 justify-center items-center pb-7   ">
          <Image
            src={cisco}
            alt={"cisco"}
            width={204}
            height={64}
            className="w-32 md:w-[204px]"
          />
          <Image
            src={volvo}
            alt={"cisco"}
            width={53.328}
            height={63.994}
            className="w-10 md:w-[53px]"
          />
          <Image
            src={deloitte}
            alt={"cisco"}
            width={117.328}
            height={63.997}
            className="w-32 md:w-[117px]"
          />
          <Image
            src={walmart}
            alt={"walmart"}
            width={117.328}
            height={63.997}
            className="w-10 md:w-[117px] "
          />
          <Image
            src={okta}
            alt={"Okta"}
            width={73}
            height={64}
            priority
            className=" w-10 md:w-[54px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPage;

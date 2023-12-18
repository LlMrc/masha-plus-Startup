import React from "react";
import walmart from "../../public/images/sponsors/walmart.png";
import volvo from "../../public/images/sponsors/volvo.png";
import cisco from "../../public/images/sponsors/cisco.png";
import okta from "../../public/images/sponsors/okta.png";
import deloitte from "../../public/images/sponsors/deloitte.png";
import Image from "next/image";

const SectionPage = () => {
  return (
    <div className="inline-flex py-[60px] items-start my-10">
      <div className="flex w-[1120px] flex-col  justify-center items-center gap-[48px]">
        <p className="text-[rgba(5,0,56,0.60)] text-center [font-family:Inter] text-lg not-italic font-normal leading-6">
          Trusted by 45M+ users
        </p>
        <div className="flex h-[92px] gap-10 justify-center items-center pb-7  ">
          <Image
            src={cisco}
            alt={"cisco"}
            width={224}
            height={64}
            className=" py-[0.001px]"
          />
          <Image
            src={volvo}
            alt={"cisco"}
            width={53.328}
            height={63.994}
            className=" py-[0.001px]"
          />
          <Image
            src={deloitte}
            alt={"cisco"}
            width={117.328}
            height={63.997}
            className=" py-[0.001px]"
          />
          <Image
            src={walmart}
            alt={"cisco"}
            width={117.328}
            height={63.997}
            className=" py-[0.001px]"
          />
          <Image
            src={okta}
            alt={"Okta"}
            width={73}
            height={64}
            priority
            className=" py-[0.001px] w-[73px]  h-[64px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionPage;

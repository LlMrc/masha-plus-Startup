type Props = {
  title: string;
  description: string;
};

import React from "react";
const OurCompany = () => {
  return (
    <section className="w-full px-0 bg-[#FFD02F]">
      <div className=" text-[#050038] flex flex-col justify-center items-center gap-[17px] w-2/5 mx-[auto]  py-10">
        <p className="text-[#050038] text-center [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          Why companies large and small trust Miro
        </p>
        <p className="text-[#050038] text-center [font-family:Inter] text-lg not-italic font-normal leading-6">
          Contact Sales to request a demo
        </p>
      </div>
      <div className="grid grid-cols-3 items-center justify-center px-40 py-10">
        <Items
          title={"iso"}
          description={"ISO-27001 enterprise-grade security compliant"}
        />
        <Items
          title={"#1"}
          description={"Visual Collaboration Platform on G2"}
        />
        <Items title={"99%"} description={"of the Fortune 100 are customers"} />
        <Items
          title={"1.0000+"}
          description={"community- and expert-built templates"}
        />
        <Items title={"45M"} description={"users around the world"} />
        <Items
          title={"100+"}
          description={"integrations with technology partners"}
        />
      </div>
    </section>
  );
};

const Items = (props: Props) => {
  return (
    <div className="flex flex-col items-center py-10 min-h-[200px]">
      <p className="text-4xl font-bold text-[#050038]">{props.title}</p>
      <p className="text-[#050038] w-[332.966px] text-center [font-family:Inter] text-lg not-italic font-normal leading-6">
        {props.description}
      </p>
    </div>
  );
};
export default OurCompany;

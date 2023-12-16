import Image from "next/image";
import React from "react";
import banner from "../../public/images/Group.png";

type Props = {
  title: String;
  description: String;
};

const CallToAction = () => {
  return (
    <div className="inline-flex flex-col items-center ">
      <h2 className="w-[1120px] h-[168px]   relative ">
        <p className="text-[#050038] relative my-0 mx-[auto] text-center h-[168px] w-[448px] [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          Collaborate without constraints
          <div className="shrink-0 absolute -top-14 -right-6">
            <Image src={banner} alt={"Group"} width={173.381} height={52.518} />
          </div>
        </p>
      </h2>
      <div className="flex items-start gap-5 pl-2.5 pr-[10.141px] py-0">
        <Section
          title={"Free forever"}
          description={`Our free plan gives you unlimited team members, 
        3 boards, and 300+ expert-made templates. Signing up with your 
        work email lets you bring in your team faster. See our
        pricing plans for more features.`}
        />

        <Section
          title={"Easy integrations"}
          description={`Miro has 100+ powerful integrations with tools you 
        already use like G Suite, Slack, and Jira, so your workflow is seamless.
         View the full list in our Marketplace .`}
        />
        <Section
          title={"Security first"}
          description={`We treat your data like you would — with the utmost care.
         We follow industry-leading security standards and give you tools to protect
          intellectual property. Learn more at our Trust Center .`}
        />
      </div>

      <div className=" inline-flex items-start pl-[29px] pr-[28.219px] pt-2.5 pb-3.5 rounded-[24px] border-solid border border-[#4262FF] bg-[#4262FF]">
        <p className=" text-white text-center [font-family:Helvetica] text-lg not-italic font-normal leading-6">
          Sign up free →
        </p>
      </div>
    </div>
  );
};

export default CallToAction;

export const Section = (props: Props) => {
  return (
    <div className="flex flex-col items-start gap-[29px] pl-6 pr-[22.394px] pt-[23px] pb-11">
      <p className="text-[#050038] [font-family:Inter] text-2xl not-italic font-bold leading-7 tracking-[-0.5px]">
        {props.title}
      </p>
      <p className="text-[rgba(5,0,56,0.60)] [font-family:Helvetica] text-lg not-italic font-normal leading-6">
        {props.description}
      </p>
    </div>
  );
};

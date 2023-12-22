"use client";

import Image from "next/image";
import React from "react";
import banner from "../../public/images/Group.png";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/app/utils/motion";

type Props = {
  title: String;
  description: String;
};

const CallToAction = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="inline-flex w-full flex-col items-center md:px-24"
    >
      <h2 className="md:w-[1120px] h-[168px]   relative ">
        <div className="text-[#050038]  relative my-0 mx-[auto] text-center h-[168px] w-[448px] [font-family:Inter] text-4xl md:text-5xl not-italic font-bold leading-[56px] tracking-[-1px]">
          <motion.p variants={textVariant2} initial="hidden" whileInView="show">
            Collaborate without constraints
          </motion.p>
          <div className="shrink-0 absolute -top-14 md:-right-6 right-10">
            <Image src={banner} alt={"Group"} width={173.381} height={52.518} />
          </div>
        </div>
      </h2>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-5  px-2 py-0">
        <Section
          title={"Unlocking Digital Excellence"}
          description={`Dive into the digital future with our team of seasoned 
          IT professionals! Armed with cutting-edge expertise,
           we deliver innovative, tailor-made solutions to 
           address your most complex needs.`}
        />

        <Section
          title={"Technological Priority"}
          description={`In the heart of the digital era, our dynamic 
          team of IT experts is ready to be your trusted partner. 
          Together, we shape the future of your business by offering avant-garde IT solutions.`}
        />
        <Section
          title={"Digital Success"}
          description={`Join forces with dedicated IT enthusiasts and unlock
           the doors to innovation and success for your business. Our devoted 
           team is at the forefront of the latest technological advancements, 
          ready to craft solutions tailored to your specific needs. `}
        />
      </div>

      <div className=" inline-flex items-start pl-[29px] pr-[28.219px] pt-2.5 pb-3.5 rounded-[24px] border-solid border border-[#4262FF] bg-[#4262FF]">
        <p className=" text-white text-center [font-family:Helvetica] text-lg not-italic font-normal leading-6">
          Sign up free →
        </p>
      </div>
    </motion.section>
  );
};

export default CallToAction;

export const Section = (props: Props) => {
  return (
    <div className="flex flex-col items-start gap-[29px] pl-6 pr-[22.394px] md:pt-[23px] pb-11">
      <p className="text-[#050038] [font-family:Inter] text-2xl not-italic font-bold leading-7 tracking-[-0.5px]">
        {props.title}
      </p>
      <p className="text-[rgba(5,0,56,0.60)] [font-family:Helvetica] text-lg not-italic font-normal leading-6">
        {props.description}
      </p>
    </div>
  );
};

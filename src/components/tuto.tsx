"use client";

import Image from "next/image";
import React from "react";
import brainstorm from "../../public/images/Brainstorm.png";
import { motion } from "framer-motion";
import {
  staggerContainer,
  textContainer,
  textVariant2,
} from "@/app/utils/motion";
type Props = {
  title: string;
};
const Tuto = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-[1120px] h-[739.016px] shrink-0 mt-20 mx-[auto]"
    >
      <motion.p
        variants={textContainer}
        className="text-[#050038] py-2 [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]"
      >
        {Array.from("Built for the way you work").map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === "" ? "\u00a0" : letter}
          </motion.span>
        ))}
      </motion.p>
      <div className="inline-flex justify-end items-start gap-2 ">
        <Title title={"Brainstorming"} />
        <Title title={"Diagramming"} />
        <Title title={"Meetings & Workshops"} />
        <Title title={"Scrum Events"} />
        <Title title={"Mapping"} />
        <Title title={"Research & Design"} />
        <Title title={"Strategic Planning"} />
      </div>

      <div className="flex w-[1060px] h-[517.016px] justify-center my-10 items-start shrink-0 bg-lime-400">
        <div className="w-[360px] flex flex-col gap-4 h-full shrink-0 bg-slate-50 rounded-sm p-4">
          <p className="text-[#050038] [font-family:Helvetica] text-lg not-italic font-normal leading-6">
            Brainstorming
          </p>
          <p className="text-[rgba(5,0,56,0.70)] [font-family:Helvetica] text-lg not-italic font-normal leading-6">
            Unleash creative ideas and build on them with the help of sticky
            notes, images, mind maps, videos, drawing capabilities — the list
            goes on.
          </p>
          <p className="text-[#4262FF] my-2 [font-family:Helvetica] text-lg not-italic font-normal leading-6">
            Learn more →
          </p>
        </div>

        <div className="w-[700px] h-[517.016px] shrink-0">
          <Image src={brainstorm} alt={"brain"} />
        </div>
      </div>
    </motion.section>
  );
};

const Title = (props: Props) => {
  return (
    <div className="flex items-start pl-[18px] pr-[32.516px] pt-[13px] pb-[15px] border bg-white rounded-3xl border-solid border-[#F2F2F2]">
      <p className="text-[#050038] [font-family:Helvetica] text-sm not-italic font-normal leading-5">
        {props.title}
      </p>
    </div>
  );
};
export default Tuto;

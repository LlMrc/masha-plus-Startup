"use client";

import Image from "next/image";
import React from "react";
import pc from "../../public/images/integrations_all_integrations.png";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/app/utils/motion";

const Connect = () => {
  return (
    <section
      className="inline-flex flex-col md:flex-row 
    py-[60px] md:px-[50px] w-full 
    items-center gap-2 md:gap-4 justify-between "
    >
      <div className="flex items-start px-2 pr-0 py-[76.813px]">
        <div className="md:w-[450px] w-full ">
          <Image src={pc} alt={"pc"} />
        </div>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" w-full md:w-[466px] h-[344px] p-2 md:p-0 "
      >
        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="text-[#050038] w-[355px] h-[168px] [font-family:Inter] text-5xl not-italic font-bold leading-[56px] tracking-[-1px]"
        >
          Connect your tools, close your tabs
        </motion.p>

        <p className="md:w-[458.934px] text-[rgba(5,0,56,0.60)] [font-family:Inter] text-lg not-italic font-normal leading-6">
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
      </motion.div>
    </section>
  );
};

export default Connect;

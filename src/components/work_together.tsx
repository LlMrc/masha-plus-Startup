"use client";

import React from "react";
import work from "../../public/images/hybridwork.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/app/utils/motion";

const WorkTogether = () => {
  return (
    <section className="flex flex-col md:flex-row py-[60px] px-4 justify-center items-center  md:px-24 w-screen gap-2">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" w-full md:w-[550px] h-[264px] px-2 "
      >
        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="w-full md:w-[440.7px]  text-[#050038] [font-family:Inter] text-4xl md:text-5xl not-italic font-bold leading-[56px] tracking-[-1px]"
        >
          Work together, wherever you work
        </motion.p>
        <p className="sm:w-full md:w-[453.716px] text-[rgba(5,0,56,0.60)] [font-family:Inter] text-lg not-italic font-normal leading-6">
          In the office, remote, or a mix of the two, with Miro, your team can
          connect, collaborate, and co-create in one space no matter where you
          are.
        </p>
        <div className="inline-flex items-end justify-center gap-[5.016px] my-4 transition-all duration-300 hover:scale-105 ">
          <span className="flex w-[104.716px] h-[22px] flex-col  text-[#4262FF] justify-center shrink-0 border-b-[#4262FF] border-b border-solid">
            Learn more
          </span>
          <span className="text-[#4262FF]">→</span>
        </div>
      </motion.div>
      <div className="px-3  md:px-0">
        <Image
          src={work}
          alt={"hydrate work"}
          className="w-full md:w-[535px] md:h-[500px]"
        />
      </div>
    </section>
  );
};

export default WorkTogether;

"use client";

import React from "react";
import StartSvg from "./start";
import hero_img from "../../public/images/hero.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/app/utils/motion";

const LandingPage = () => {
  return (
    <div className="md:pt-24 mt-10 flex flex-col mx-auto  md:flex-row lg:flex-row md:px-24 justify-center  items-center   md:gap-[40px]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col h-[469px] px-2 sm:full  md:w-[500px] gap-4 "
      >
        <motion.div
          variants={zoomIn(0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          className="md:text-5xl text-2xl items-start  not-italic text-[#050038] font-bold leading-[56px] tracking-[-1px]"
        >
          Take ideas from better to best
        </motion.div>
        <div className="text-lg not-italic text-[#050038B8] font-normal leading-6">
          Masha+ is your team's visual platform to connect, collaborate, and
          create — together.
        </div>

        <div className="flex  md:w-[440px] flex-col justify-center  items-start gap-2.5">
          <div className="flex h-[48px] w-full  items-center p-4 rounded-[32px] border-solid border border-[#9B99AF]">
            <h6 className="text-[#5F5C80]   [font-family:Inter] text-lg not-italic font-normal leading-[normal]">
              Enter your work email
            </h6>
          </div>

          <div className="flex bg-[#4262FF] h-[48px] w-full justify-center items-center px-2 rounded-[32px] border border-solid border-[#4262FF]">
            <h6 className="text-white text-center [font-family:Helvetica] text-lg not-italic font-normal leading-[27px]">
              Sign up free →
            </h6>
          </div>
        </div>

        <span className="text-[rgba(5,0,56,0.40)] [font-family:Helvetica] text-sm not-italic font-normal leading-5">
          Collaborate with your team within minutes
        </span>

        <div className="inline-flex sm:p-4 md:p-[14px] items-start rounded-[8px] bg-[#F5F5F7]">
          <div className="flex flex-col items-start gap-[2px]">
            <div className="flex p-2 items-start gap-[6px] ">
              <StartSvg />
              <StartSvg />
              <StartSvg />
              <StartSvg />
            </div>
            <span className="text-[#050038] [font-family:Helvetica] text-[11px] not-italic font-normal leading-[15px]">
              Based on 5149+ reviews:
            </span>
          </div>

          <div className="flex items-start gap-[14.328px] self-end px-10 text-2xl py-0">
            <h4>Contact us ✉</h4>
          </div>
        </div>
      </motion.div>

      <div className="">
        <Image
          className="sm:w-screen md:w-[580px]  md:h-[462.844px]"
          src={hero_img}
          alt={"hero image"}
          priority
        />
      </div>
    </div>
  );
};

export default LandingPage;

"use client";

import Image from "next/image";
import React from "react";
import pc from "../../public/images/integrations_all_integrations.png";
import { motion } from "framer-motion";
import { staggerContainer, textVariant2 } from "@/app/utils/motion";
import styles from "@/app/styles/indx";

const Connect = () => {
  return (
    <section
      className={`${styles.paddings} inline-flex flex-col md:flex-row justify-center
    py-[60px] w-full gap-2
    items-center  md:gap-12 mx-auto md:my-24`}
    >
      <div className=" md:px-0 shadow-md">
        <Image
          src={pc}
          alt={"pc"}
          className="w-full md:w-[535px] md:h-[500px]"
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" w-full md:w-[466px] h-[344px]  p-2 md:p-0 "
      >
        <motion.p
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="text-[#050038] md:w-[355px] md:mb-4 mb-1 lg:w-full [font-family:Inter] text-4xl md:text-5xl not-italic font-bold leading-[56px] tracking-[-1px]"
        >
          We are your trusted partner for a flourishing digital future
        </motion.p>

        <p className="md:w-[458.934px] text-[rgba(5,0,56,0.60)] [font-family:Inter] text-lg not-italic font-normal leading-6">
          We combine expertise, creativity, and commitment to turn your
          challenges into opportunities, ensuring exceptional IT solutions and a
          reliable partnership for the success of your business.
        </p>
        <div className="inline-flex text-[#4262FF] transition-all duration-300 items-end gap-[5px] my-2 hover:text-red-600 hover:scale-105">
          <p className="[font-family:Inter] text-lg not-italic font-normal leading-6">
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

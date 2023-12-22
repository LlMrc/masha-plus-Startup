"use client";
type Props = {
  title: string;
  textStyles: string;
};

type Props_1 = {
  title: string | ReactElement;
  textStyles: string;
};

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../app/utils/motion";
import { ReactElement } from "react";

export const TitleText = (props: Props_1) => (
  <motion.div
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-[#050038]  ${props.textStyles}`}
  >
    {props.title}
  </motion.div>
);

export const TypingText = (props: Props) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${props.textStyles}`}
  >
    {Array.from(props.title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00a0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

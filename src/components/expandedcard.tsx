type Props = {
  id: string;
  imageUrl: string;
  title: string;
  index: number;
  active: string;
  profession: string;
  handleClick: (a: string) => void;
};

import React from "react";
import { motion } from "framer-motion";
import linkedin from "../../public/images/linkedin.svg";
import styles from "../app/styles/indx";
import { fadeIn } from "../app/utils/motion";
import Image from "next/image";
import Link from "next/link";

const ExpandedCard = (props: Props) => (
  <motion.div
    variants={fadeIn("right", "spring", props.index * 0.5, 0.75)}
    className={`relative ${
      props.active === props.id
        ? "lg:flex-[3.5] flex-[10]"
        : "lg:flex[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px]
    h-[500px] transition-[flex] duration-[0.75s] ease-out cursor-pointer`}
    onClick={() => props.handleClick(props.id)}
  >
    <Image
      src={props.imageUrl}
      alt={props.title}
      fill
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {props.active !== props.id ? (
      <h3
        className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-24 lg:rotate-[-90deg]
      lg:origin-[0,0]"
      >
        {props.title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-t-2xl lg:rounded-t-none rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounde-[24px] glassmorphism mb-[16px] rounded-[24px]`}
        >
          <Link
            href={"https://www.linkedin.com/in/louis-marc-leonard-a57a13192/"}
            className="w-full  flex items-center justify-center   object-contain"
          >
            <Image
              src={linkedin}
              alt={"linkedin"}
              className="w-1/2 h-1/2 object-contain"
            />
          </Link>
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          {props.profession}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text[24px] text-white">
          {props.title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExpandedCard;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../app/styles/indx";
import CardList from "../data/card";
import { staggerContainer } from "../app/utils/motion";
import { TitleText, TypingText } from "../components/customText";
import Expandedcard from "../components/expandedcard";

const Explorer = () => {
  const [active, setActive] = useState("world-2");

  return (
    <section
      className={`${styles.paddings} mx-auto sm:w-full relative  md:w-3/4`}
      id="explore"
    >
      <div className="feedback-gradient z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto  flex flex-col`}
      >
        <TypingText title="| Our Team" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col  gap-5">
          {CardList.map((world, index) => (
            <Expandedcard
              key={world.id}
              id={world.id}
              index={index}
              active={active}
              handleClick={setActive}
              imageUrl={world.url}
              title={world.name}
              profession={world.profession}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explorer;
